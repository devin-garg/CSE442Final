const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class MapD3Component extends D3Component {
	
    initialize(node, props) {
		var points = [];
		var allPoints = [];
		var allMyLines = [];
		var allPolygons = [];
		var startShape = [[0, 0], [500, 0], [500, 350], [0, 350]];

		const svg = this.svg = d3.select(node).append('svg');
/*		const canvas = d3.select(node).append('canvas').node();
		const context = canvas.getContext("2d");
		canvas.width = 500;
		canvas.height = 350;*/
		svg.attr('viewBox', '0 0 ${size} ${size}')
		    .style('width', '500')
		    .style('height', '350');
		
		var self = this;

		for (var i = 0; i < startShape.length; i++) {
		    svg.append("line")
			.attr("x1", startShape[i][0])
			.attr("y1", startShape[i][1])
			.attr("x2", startShape[(i + 1) % startShape.length][0])
			.attr("y2", startShape[(i + 1) % startShape.length][1])
			.attr("style", "stroke:pink; stroke-width:2")
		}

		var borderPath = svg.append("rect")
		    .attr("x", 0)
		    .attr("y", 0)
		    .attr("height", 350)
		    .attr("width", 500)
		    .style("stroke", "pink")
		    .style("fill", "none")
		    .style("stroke-width", 1);

		var runNewLinesRunning = false;
		runNewLines();

		function runNewLines(argument) {
			if (runNewLinesRunning) {return}
			runNewLinesRunning = true;
			setupPoints(self.props.pop, self.props.dems - 1)
			splitShape(startShape, points, self.props.districts)
			runNewLinesRunning = false
		}

		function deleteAllPoints() {
			for (var i = allPoints[0]._groups[0].length - 1; i >= 0; i--) {
				allPoints[0]._groups[0][i].remove()
			}
			allPoints = []
		}

		function deleteAllLines() {
			for (var i = allMyLines.length - 1; i >= 0; i--) {
				allMyLines[i].groups[0][0].remove()
			}
			allMyLines = []
		}

		function deletePolygons() {
			for (var i = allPolygons.length - 1; i >= 0; i--) {
				allPolygons[i]._groups[0][0].remove()
			}
			allPolygons = []
		}

		function setupPoints() {
			points = [];
			allPoints = []
			var percentDems = Math.round(self.props.pop * (self.props.dems / 100))

			for (var i = 0; i < self.props.pop; i++) {
				if (i > percentDems) {
					points[i] = {x: Math.floor(Math.random() * 501),
						y: Math.floor(Math.random() * 351), party: 1};
				} else {
					points[i] = {x: Math.floor(Math.random() * 501),
						y: Math.floor(Math.random() * 351), party: 0};
				}
			}

			allPoints.push(svg.selectAll(".pin").data(points)
				.enter().append("circle", ".pin")
				.attr("r", 3)
				.attr("transform", function(d) {
					return "translate(" + d.x + ", " + d.y + ")"
				})
				.attr("z-index", "100")
				.attr("fill", function(d) {
					if (d.party >= 1.0) {
						return "blue"
					} else {
						return "red"
					}
				})
			) 
		}

		function performBorderOperation(minLine, color) {
			allMyLines.push(svg.selectAll(".split").data(minLine)
				.enter().append("line", ".split")
				.attr("x1", function(d) {
					return Math.floor(d.x1)
				})
				.attr("x2", function(d) {
					return Math.floor(d.x2)
				})
				.attr("y1", function(d) {
                    return Math.floor(d.y1)
                })
                .attr("y2", function(d) {
                    return Math.floor(d.y2)
                })
                .attr("style", "stroke:" + color + "; stroke-width:2"))
		}

		function calculateIntersectionPoint(
			line1StartX, line1StartY, line1EndX, line1EndY, 
			line2StartX, line2StartY, line2EndX, line2EndY) {
			var denom, a, b, numer1, numer2, result = {
				x: null,
				y: null,
				onLine1: false,
				onLine2: false
			};

			denom =  ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - 
				((line2EndX - line2StartX) * (line1EndY - line1StartY));

			if (denom == 0) {
				return result;
			}

			a = line1StartY - line2StartY;
			b = line1StartX - line2StartX;
			numer1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
			numer2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);

			a = numer1 / denom;
			b = numer2 / denom;

			result.x = line1StartX + (a * (line1EndX - line1StartX));
			result.y = line1StartY + (a * (line1EndY - line1StartY));

			if (a >= 0 && a <= 1) {
				result.onLine1 = true;
			}
			if (b >= 0 && b <= 1) {
				result.onLine2 = true;
			}

			if (result.onLine1 && result.onLine2) {
				return [result.x, result.y];
			} else {
				return null;
			}
		}

		function splitShape(corners, pop, numDists) {
			if (numDists == 1) {
				var numColors = {red: 0, blue: 0}

				for (var i = pop.length - 1; i >= 0; i--) {
					if (pop[i].party == 0) {
						numColors.blue++;
					} else {
						numColors.red++;
					}
				}

				var polygon = document.createElement('polygon');
				var myCorners = ""

				for (var i = corners.length - 1; i >= 0; i--) {
					myCorners += corners[i][0] + "," + corners[i][1] + " "
				}

				myCorners = myCorners.trim();

				if (numColors.blue > numColors.red) {
					allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).
						enter().append("polygon", "circle")
						.attr("points", function(d) {
							return d
						})
						.attr("style", "fill:blue;")
						.attr("opacity", "0.1"))
				} else if (numColors.blue < numColors.red) {
					allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).
						enter().append("polygon", "circle")
						.attr("points", function(d) {
							return d
						})
						.attr("style", "fill:red;")
						.attr("opacity", "0.1"))
				} else {
					allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).
						enter().append("polygon", "circle")
						.attr("points", function(d) {
							return d
						})
						.attr("style", "fill:red;")
						.attr("opacity", "0.1"))
				}
				return
			}/* else {
				var a = Math.floor(numDists / 2);
				var b = Math.ceiling(numDists / 2);

				var splitlines = [];
			}*/


			var maxX = 0;
			var maxY = 0;
			var minX = 500;
			var minY = 350;

			for (var i = 0; i < corners.length; i++) {
				if (corners[i][0] > maxX) {
					maxX = corners[i][0];
				}
				if (corners[i][1] > maxY) {
					maxY = corners[i][1];
				}
				if (corners[i][0] < minX) {
					minX = corners[i][0];
				}
				if (corners[i][1] < minY) {
					minY = corners[i][1];
				}
			}

			var smaller = Math.floor(numDists / 2);
			var larger = numDists - smaller;
			var goal = Math.floor(smaller / numDists * pop.length);
			var splitlines = [];

			for (var i = minX; i < maxX; i--) {
				for (var j = minY; j < maxY; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (maxX != i &&
							pop[k].y > ((j - minY) / (maxX - i)) *
							(pop[k].x - i) + minY) {
							console.log("1 here");
							above++;
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: i, y1: minY,
							x2: maxX, y2: j};
					}
				}

				for (var j = minX; j < maxX; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (j != i &&
							pop[k].y > ((maxY - minY) / (j - i)) *
							(pop[k].x - i) + minY) {
							console.log("2 here");
							above++;
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: i, y1: minY,
							x2: j, y2: maxY};
					}
				}

				for (var j = minY; j < maxY; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (minX != i &&
							pop[k].y > ((j - minY) / (minX - i)) *
							(pop[k].x - i) + minY) {
							console.log("3 here");
							above++
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: i, y1: minY,
							x2: minX, y2: j};
					}
				}
			}

			for (var i = minY; i < maxY; i--) {
				for (var j = minY; j < maxY; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (maxX != minX &&
							pop[k].y > ((j - i) / (maxX - minX)) *
							(pop[k].x - minX) + i) {
							console.log("4 here");
							above++;
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: minX, y1: i,
							x2: maxX, y2: j};
					}
				}

				for (var j = minX; j < maxX; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (j != minX &&
							pop[k].y > ((maxY - i) / (j - minX)) *
							(pop[k].x - minX) + i) {
							console.log("5 here");
							above++;
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: minX, y1: i,
							x2: j, y2: maxY};
					}
				}
			}

			for (var i = minY; i < maxY; i--) {
				for (var j = minX; j < maxX; j--) {
					var above = 0;
					for (var k = 0; k < pop.length; k++) {
						if (j != maxX &&
							pop[k].y > ((maxY - i) / (j - maxX)) *
							(pop[k].x - maxX) + i) {
							console.log("6 here");
							above++
						}
					}
					if (above == goal || above == pop.length - goal) {
						splitlines[splitlines.length] = {x1: maxX, y1: i,
							x2: j, y2: maxY};
					}
				}
			}

			var minLine = [{x1: 0, y1: 0, x2: 0, y2: 0}];
			var minLen = 1000000000;
			var oldLine = {x1: 0, y1: 0, x2: 0, y2: 0};

			for (var i = 0; i < splitlines.length; i++) {
				var inters = [];

				for (var j = 0; j < corners.length; j++) {
					var inter = calculateIntersectionPoint(splitlines[i].x1, splitlines[i].y1,
						splitlines[i].x2, splitlines[i].y2, corners[j][0], corners[j][1],
						corners[(j + 1) % corners.length][0], corners[(j + 1) % corners.length][1]);
					
					if (inter != null) {
						inters[inters.length] = inter;
					}
				}

				if (inters.length == 2) {
					var tmp = splitlines[i];
					splitlines[i] = {x1: inters[0][0], y1: inters[0][1],
						x2: inters[1][0], y2: inters[1][1]}
					var len = Math.pow((splitlines[i].x2 - splitlines[i].x1), 2) +
						Math.pow((splitlines[i].y2 - splitlines[i].y2), 2);
					if (len <= minLen) {
						minLen = len;
						minLine = [splitlines[i]];
						oldLine = tmp;
					}
				}
			}

			var flag = true;
			if (minLine[0].x1 != minLine[0].x2 && 
				corners[0][1] <= ((minLine[0].y2 - minLine[0].y1) / 
				(minLine[0].x2 - minLine[0].x1)) * (corners[0][0] - 
				minLine[0].x1) + minLine[0].y1) {
				flag = false;
			}

			var distA = [];
			var distB = [];

			for (var i = 0; i < corners.length; i++) {
				var inter = calculateIntersectionPoint(oldLine.x1, oldLine.y1,
					oldLine.x2, oldLine.y2, corners[i][0], corners[i][1],
					corners[(i + 1) % corners.length][0], corners[(i + 1) % corners.length][1]);

				if (flag) {
					distA[distA.length] = corners[i];
				} else {
					distB[distB.length] = corners[i];
				}

				if (inter != null) {
					distA[distA.length] = [Math.floor(inter[0]), Math.floor(inter[1])];
					distB[distB.length] = [Math.floor(inter[0]), Math.floor(inter[1])];
					flag = !flag;
				}
			}

			var abovePt;
			var belowPt;

			for (var i = 0; i < pop.length; i++) {
				if (minLine[0].x1 != minLine[0].x2 &&
					pop[k].y > ((minLine[0].y2 - minLine[0].y1) / (minLine[0].x2 - 
						minLine[0].x1)) * (pop[k].x - minLine[0].x1) + minLine[0].y1) {
					abovePt[abovePt.length] = pop[k];
				} else {
					belowPt[belowPt.length] = pop[k];
				}
			}

			performBorderOperation(minLine, "black")
			if (abovePt.length >= belowPt.length) {
				splitShape(distA, abovePt, larger);
				splitShape(distB, belowPt, smaller);
			} else {
				splitShape(distA, abovePt, smaller);
				splitShape(distB, belowPt, larger);
			}
		}
    }

    update(props) {
    	this.deletePolygons();
		this.deleteAllLines();
		this.deleteAllPoints();
    	this.runNewLines();
    }       
}

MapD3Component.defaultProps = {
	districts: '7',
	pop: '50',
	dems: '50'
};

module.exports = MapD3Component;
