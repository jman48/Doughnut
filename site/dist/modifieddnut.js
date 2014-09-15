
	var thickness = 40;
    var width = 500 + thickness;
    var height = 500 + thickness;
    var radius = 250;
    var svg = null;

function drawPie(data) {  

    
    var color = d3.scale.category20();
   
    if(svg == null) {
	    svg = d3.select("#donught")        
	    .append("svg")
	    .attr("width", width)
	    .attr("height", height)
        .attr("id", "canvas");
	}
    
    var group = svg   
    .append("g")
    .attr("transform", "translate(" + width/2 + ", " + height/2 + ")");
    
    var arc = d3.svg.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius)
    var pie = d3.layout.pie()
                .value(function(d) {
                    	return parseInt(d.value);
                });
    
    var arcs = group.selectAll(".arc")
                    .data(pie(data))
                    .enter()
                    .append("g")
                    .attr("class", "arc")
                    .on("mouseover", function(d) {
                         d3.select("#tooltip_d3")
                        .style("left", d3.event.pageX + "px")
                        .style("top", d3.event.pageY + "px")
                        .style("opacity", 1)
                        .select("#value")
                        .text(d.value);
                    d3.select("#tooltip_d3")
                        .select("#title")
                        .text(d.data.name);
                        console.log(d3.select(".arc"));
                        d3.select(this).attr("transform", "scale(1.03)");

                    })
                    .on("mouseout", function() {
						d3.select("#tooltip_d3")
                            .style("opacity", 0);
                        d3.select(this).attr("transform", "scale(1)");
                    });
    
    arcs.append("path")
    .attr("d", arc)
    .attr("id", function(d,i){i;
    })
    .attr("fill", function(d, i) {
    	//console.log(d, i)
    	//console.log(color(d.data.Region));
        return color(d.value);
        
    });
    
    //Recursively make a call to this method to draw all inner circles until no teams left
    //drawPie(teams, svgDonut, (radius - thickness));
    //drawPie(data2, svgDonut, 170);
}


function drawPieInner(data) {  

    var color = d3.scale.category20b();
    var radiusInnner = radius - thickness;
   
    if(svg == null) {
	    svg = d3.select("#donught")        
	    .append("svg")
	    .attr("width", width)
	    .attr("height", height);
	}
    else {
        //svgDonut.html("");
    }
    
    var group = svg   
    .append("g")
    .attr("transform", "translate(" + width/2 + ", " + height/2 + ")");
    
    var arc = d3.svg.arc()
                .innerRadius(radiusInnner - thickness)
                .outerRadius(radiusInnner)
    var pie = d3.layout.pie()
                .value(function(d) {                   
                        return parseInt(d.Total);
                });
    
    var arcs = group.selectAll(".arc")
                    .data(pie(data))
                    .enter()
                    .append("g")
                    .attr("class", "arc")
                    .on("mouseover", function(d) {
                        //Get spelling right
                        d3.select("#tooltip_d3")
                        .style("left", d3.event.pageX + "px")
                        .style("top", d3.event.pageY + "px")
                        .style("opacity", 1)
                        .select("#value")
                        .text(d.value);
                    d3.select("#tooltip_d3")
                        .select("#title")
                        .text(d.data.AgeGroup);
                        d3.select(this).attr("transform", "scale(0.97)");

                    })
                    .on("mouseout", function() {
                        d3.select("#tooltip_d3")
                            .style("opacity", 0);
                        d3.select(this).attr("transform", "scale(1)");
                    });
    
    arcs.append("path")
    .attr("d", arc)
    .attr("id", function(d,i){i;
    })
    .attr("fill", function(d, i) {
    	//console.log(d, i)
    	//console.log(color(d.data.Region));
        return color(d.data.AgeGroup);
        
    });
    
    //Recursively make a call to this method to draw all inner circles until no teams left
    //drawPie(teams, svgDonut, (radius - thickness));
    //drawPie(data2, svgDonut, 170);
}