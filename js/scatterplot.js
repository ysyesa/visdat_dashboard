d3.csv('res/scatterplot.csv', function (data) {
    // Variables
    var body = d3.select('#scatterplot');
    var margin = { top: 50, right: 50, bottom: 50, left: 50 }
    var h = 400 - margin.top - margin.bottom
    var w = 500 - margin.left - margin.right
    var colorScale = d3.scale.category20()
    // Scales

    var xScale = d3.scale.linear()
      .domain([
          0,
          120000
          ])
      .range([0,w])
    var yScale = d3.scale.linear()
      .domain([
          0,
          40
          ])
      .range([h,0])
      // SVG
      var svg = body.append('svg')
          .attr('height',h + margin.top + margin.bottom)
          .attr('width',w + margin.left + margin.right)
        .append('g')
          .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
      // X-axis
      var xAxis = d3.svg.axis()
        .scale(xScale)
        .ticks(5)
        .orient('bottom')
    // Y-axis
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .ticks(5)
        .orient('left')
    // Circles
    var circles = svg.selectAll('circle')
        .data(data)
        .enter()
      .append('circle')
        .attr('cx',function (d) { return    xScale(d.gdp) })
        .attr('cy',function (d) { return yScale(d.suicide) })
        .attr('r','10')
        .attr('stroke','black')
        .attr('stroke-width',1)
        .attr('fill',function (d,i) { 
            return colorScale(i) 
        })
        .on('mouseover', function () {
          d3.select(this)
            .transition()
            .attr('r',20)
            .attr('stroke-width',3)
        })
        .on('mouseout', function () {
          d3.select(this)
            .transition()
            .attr('r',10)
            .attr('stroke-width',1)
        })
      .append('title') // Tooltip
        .text(function (d) { return 'Country: ' + d.countries + '\nGdp: ' + d.gdp +
                             '\nSuicide: ' + d.suicide })
    // X-axis
    svg.append('g')
        .attr('class','axis')
        .attr('transform', 'translate(0,' + h + ')')
        .call(xAxis)
      .append('text') // X-axis Label
        .attr('class','label')
        .attr('y',-10)
        .attr('x',w)
        .attr('dy','.71em')
        .style('text-anchor','end')
        .text('GDP per capita')
    // Y-axis
    svg.append('g')
        .attr('class', 'axis')
        .call(yAxis)
      .append('text') // y-axis Label
        .attr('class','label')
        .attr('transform','rotate(-90)')
        .attr('x',0)
        .attr('y',5)
        .attr('dy','.71em')
        .style('text-anchor','end')
        .text('Suicide per 100,000')

    svg.append("text")
        .attr("x", (w / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .text("GDP Per Capita and Suicide Rate");
  })