const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class MapD3Component extends D3Component {
	
    initialize(node, props) {
		const svg = this.svg = d3.select(node).append('svg');
		svg.attr('viewBox', '0 0 ${size} ${size}')
	    .style('width', '400')
	    .style('height', '400');
	
		var self = this;

		var points = [];
		var allPoints = [];
		var allMyLines = [];
		var allPolygons = [];
		var startShape = [[0, 0], [400, 0], [400, 400], [0, 400]];

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
			.attr("height", 400)
			.attr("width", 400)
			.style("stroke", "pink")
			.style("fill", "none")
			.style("stroke-width", 1);

	}

	update() {

	}



}

module.exports = MapD3Component;
