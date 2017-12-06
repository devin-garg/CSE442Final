setwd("E:/Google Drive/CSE442/The-Shortest-Splitline-Algorithm-for-Gerrymandering-master/docs")
install.packages("XML")
library(XML)

#do.call(rbind,xmlToList(xmlParse(file="states.xml", asText=TRUE)))






doc=xmlTreeParse("states.xml", useInternal=TRUE)

rootNode <-xmlRoot(doc)

xmlName(rootNode) # states

names(rootNode)
names(rootNode[1])
Alaska <- rootNode[1]
rootNode[1][1]
Alaska
#rootNodeAlaska <-xmlRoot(Alaska)
#lat <- xpathSApply(Alaska,"/point",xmlValue)

#stateNorthCarolina  = xpathApply(doc,"/states//state[@name='Arkansas']//point[@lat=33.0225]",xmlValue)
stateNorthCarolina  = xpathSApply(doc,"//point", xmlValue)
stateNorthCarolina


library(plyr)
ListXml = ldply(xmlToDataFrame("states.xml"))


View(ListXml)
head(ListXml,1)

latAlaska = ListXml[1,]
latAlaska$point
latAlaska$point.1

str(latAlaska)
str(ListXml)
xmltop = xmlRoot(xmlfile) #gives content of root

xmlSize(rootNode) #how many children in node, 50 states
xmlSize(rootNode[[1]])

xmlSApply(rootNode[[1]], xmlName) # name(s)
xmlSApply(rootNode[[1]], xmlAttrs) #  attribute(s)
xmlSApply(rootNode[[1]], xmlSize) # size
# have a look at the content of the first child entry
rootNode[[1]]
# have a look at the content of the 2nd child entry
rootNode[[50]]
data = read.table("states.xml", header = F, fill = TRUE)

head(data)
rootNode[[1]][1]
names(rootNode[[1]][1])
############

library(XML)
doc <- xmlTreeParse(fileURLXML, useInternal=TRUE)
rootNode <-xmlRoot(doc)
xmlName(rootNode)
zipcode <- xpathApply(doc, "//zipcode",xmlValue)
length(zipcode)
zip <- subset(zipcode,zipcode=="21231")
length(zip)

write.csv(ListXml, "states.csv", row.names = FALSE)
