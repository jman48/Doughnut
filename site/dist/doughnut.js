function drawDoughnut() {
    var width = 400,
        height = 400,
        radius = Math.min(width, height) / 2,

        data = [
            {
        "Year": "2001",
        "Region": "Northland",
        "Population": "144400"
    },{
        "Year": "2001",
        "Region": "Auckland",
        "Population": "1218300"
    },
    {
        "Year": "2001",
        "Region": "Waikato",
        "Population": "368400"
    },
    {
        "Year": "2001",
        "Region": "Bay of Plenty",
        "Population": "246900"
    },
    {
        "Year": "2001",
        "Region": "Gisborne",
        "Population": "45500"
    },
    {
        "Year": "2001",
        "Region": "Hawke's Bay",
        "Population": "147300"
    },
    {
        "Year": "2001",
        "Region": "Taranaki",
        "Population": "105700"
    },
    {
        "Year": "2001",
        "Region": "Manawatu-Wanganui",
        "Population": "227500"
    },
    {
        "Year": "2001",
        "Region": "Wellington",
        "Population": "440200"
    },
    {
        "Year": "2001",
        "Region": "Tasman",
        "Population": "42400"
    },
    {
        "Year": "2001",
        "Region": "Nelson",
        "Population": "42900"
    },
    {
        "Year": "2001",
        "Region": "Marlborough",
        "Population": "40700"
    },
    {
        "Year": "2001",
        "Region": "West Coast",
        "Population": "31100"
    },
    {
        "Year": "2001",
        "Region": "Canterbury",
        "Population": "496700"
    },
    {
        "Year": "2001",
        "Region": "Otago",
        "Population": "188300"
    },
    {
        "Year": "2001",
        "Region": "Southland",
        "Population": "93300"
    },
    {
        "Year": "2006",
        "Region": "Northland",
        "Population": "152700"
    },
    {
        "Year": "2006",
        "Region": "Auckland",
        "Population": "1373000"
    },
    {
        "Year": "2006",
        "Region": "Waikato",
        "Population": "393200"
    },
    {
        "Year": "2006",
        "Region": "Bay of Plenty",
        "Population": "265300"
    },
    {
        "Year": "2006",
        "Region": "Gisborne",
        "Population": "46000"
    },
    {
        "Year": "2006",
        "Region": "Hawke's Bay",
        "Population": "152100"
    },
    {
        "Year": "2006",
        "Region": "Taranaki",
        "Population": "107300"
    },
    {
        "Year": "2006",
        "Region": "Manawatu-Wanganui",
        "Population": "229400"
    },
    {
        "Year": "2006",
        "Region": "Wellington",
        "Population": "466300"
    },
    {
        "Year": "2006",
        "Region": "Tasman",
        "Population": "45800"
    },
    {
        "Year": "2006",
        "Region": "Nelson",
        "Population": "44300"
    },
    {
        "Year": "2006",
        "Region": "Marlborough",
        "Population": "43600"
    },
    {
        "Year": "2006",
        "Region": "West Coast",
        "Population": "32100"
    },
    {
        "Year": "2006",
        "Region": "Canterbury",
        "Population": "540000"
    },
    {
        "Year": "2006",
        "Region": "Otago",
        "Population": "199800"
    },
    {
        "Year": "2006",
        "Region": "Southland",
        "Population": "93200"
    },
    {
        "Year": "2013",
        "Region": "Northland",
        "Population": "158700"
    },
    {
        "Year": "2013",
        "Region": "Auckland",
        "Population": "1529400"
    },
    {
        "Year": "2013",
        "Region": "Waikato",
        "Population": "418500"
    },
    {
        "Year": "2013",
        "Region": "Bay of Plenty",
        "Population": "278000"
    },
    {
        "Year": "2013",
        "Region": "Gisborne",
        "Population": "46700"
    },
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
    },
    {
        "Year": "2013",
        "Region": "Marlborough",
        "Population": "45900"
    },
    {
        "Year": "2013",
        "Region": "West Coast",
        "Population": "32700"
    },
    {
        "Year": "2013",
        "Region": "Canterbury",
        "Population": "566100"
    },
    {
        "Year": "2013",
        "Region": "Otago",
        "Population": "213300"
    },
    {
        "Year": "2013",
        "Region": "Southland",
        "Population": "94800"
    }
    ];


    var nested = d3.nest()
      .key(function(d) { return d["Year"]; })
      .entries(data);

    var color = d3.scale.category20();

    // var color = d3.scale.ordinal()
    //           .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    //             ];



    var pie = d3.layout.pie()
        .value(function(d) { return d["Population"]; })
        .sort(null);

    var arc = d3.svg.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 20);

    var svg = d3.select("#doughnut").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var slice_group = svg.datum(nested[0].values).selectAll("path")
        .data(pie)
        .enter()
        .append("g")

    var slice_path = slice_group.append("path")
        .attr("fill", function(d, i) { return color(i); })
        .attr("d", arc)
        .each(function(d) { this._current = d; }) // store the initial angles
        // .transition().duration(750).attrTween("d", arcTween)

    // Make group to hold labels
    var label_group = slice_group.append("g")
      .attr("transform", function(d) {
        console.log(d)
        var c = arc.centroid(d);
        return "translate(" + c[0] +"," + c[1] + ")";
      })

    var line_1 = label_group.append("text") // First line
      .text(function(d) { return d.data.Region; })
      .attr("text-anchor", "middle")

    var line_2 = label_group.append("text") // Second line
      .text(function(d) { return d.data["Population"]; })
      .attr("dy", "1em")
      .attr("text-anchor", "middle")

    //Switch data
    d3.selectAll("input")
      .on("change", change);

    function change() {
      var value = this.value;
      svg.datum(nested[value].values);  //returns the year for all the entries

      slice_path.data(pie) // compute the new angles
        .transition().duration(750).attrTween("d", arcTween); // redraw the arcs

      label_group.data(pie)
        .attr("transform", function(d) {
          var c = arc.centroid(d);          //puts them around the center, at this position- translates it 
          return "translate(" + c[0] +"," + c[1] + ")";
        })

      line_1.data(pie)
        .text(function(d) { return d.data["Region"]; })

      line_2.data(pie)
        .text(function(d) { return d.data["Population"]; })
    }

    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    function arcTween(a) {
      var i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arc(i(t));
      };
    }
}
