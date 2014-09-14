 data2 = [
       

{
    "Year": "2013",
    "Region": "Hawke's Bay",
    "Population": "155000"
},
{
    "Year": "2013",
    "Region": "Taranaki",
    "Population": "110600"
},
{
    "Year": "2013",
    "Region": "Manawatu-Wanganui",
    "Population": "232700"
},
{
    "Year": "2013",
    "Region": "Wellington",
    "Population": "492500"
},
{
    "Year": "2013",
    "Region": "Tasman",
    "Population": "48600"
},
{
    "Year": "2013",
    "Region": "Nelson",
    "Population": "46800"
}];

 data = [
     {
    "Year": "2013",
    "Region": "Tasman",
    "Population": "24"
},
{
    "Year": "2013",
    "Region": "Nelson",
    "Population": "46"
},
{
    "Year": "2013",
    "Region": "Hawke's Bay",
    "Population": "15"
},
{
    "Year": "2013",
    "Region": "Taranaki",
    "Population": "60"
},
{
    "Year": "2013",
    "Region": "Manawatu-Wanganui",
    "Population": "23"
},
{
    "Year": "2013",
    "Region": "Wellington",
    "Population": "12"
},
{
    "Year": "2013",
    "Region": "Tasman",
    "Population": "35"
},
{
    "Year": "2013",
    "Region": "Nelson",
    "Population": "6"
}];
var thickness = 30;
    var width = 500;
    var height = 500;
    var color = d3.scale.category20();
    var testsvg;
    var svg = null;

function drawPie(data, radius) {  

   
    if(svg == null) {
	    svgDonut = d3.select("#donught")
	    .append("svg")
	    .attr("width", width)
	    .attr("height", height);
	    svg = svgDonut;
	}
    
    var group = svgDonut.append("g")
    .attr("transform", "translate(" + width/2 + ", " + (height - 100)/2 + ")");
    
    var arc = d3.svg.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    var pie = d3.layout.pie()
    .value(function(d) {
        return parseInt(d.Population);
        
    });
    
    var arcs = group.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc")
    .on("mouseover", function(d) {
        //Get spelling right
        
    })
    .on("mouseout", function() {
        
    });
    
    arcs.append("path")
    .attr("d", arc)
    .attr("id", function(d,i){i;
    })
    .attr("fill", function(d, i) {
    	//console.log(d, i)
    	//console.log(color(d.data.Region));
        return color(d.data.Region);
        
    });
    
    //Recursively make a call to this method to draw all inner circles until no teams left
    //drawPie(teams, svgDonut, (radius - thickness));
    //drawPie(data2, svgDonut, 170);
}