$(function () {
    var japan = [                
        {x:'1996',y:18.49},
        {x:'1997',y:19.55},
        {x:'1998',y:26.36},
        {x:'1999',y:26.02},
        {x:'2000',y:25.04},
        {x:'2001',y:24.26},
        {x:'2002',y:24.72},
        {x:'2003',y:26.48},
        {x:'2004',y:24.92},
        {x:'2005',y:25.16},
        {x:'2006',y:24.66},
        {x:'2007',y:25.40},
        {x:'2008',y:24.93},
        {x:'2009',y:25.33},
        {x:'2010',y:24.28},
        {x:'2011',y:23.78},
        {x:'2012',y:21.81},
        {x:'2013',y:21.56},
        {x:'2014',y:20.25}
    ];
    var us = [                
        {x:'1996',y:12.55},
        {x:'1997',y:12.28},
        {x:'1998',y:12.15},
        {x:'1999',y:11.50},
        {x:'2000',y:11.18},
        {x:'2001',y:11.53},
        {x:'2002',y:11.77},
        {x:'2003',y:11.61},
        {x:'2004',y:11.85},
        {x:'2005',y:11.81},
        {x:'2006',y:11.93},
        {x:'2007',y:12.32},
        {x:'2008',y:12.76},
        {x:'2009',y:12.93},
        {x:'2010',y:13.32},
        {x:'2011',y:13.60},
        {x:'2012',y:13.86},
        {x:'2013',y:13.93},
        {x:'2014',y:14.36}
    ];  
    var france = [                
        {x:'1996',y:20.58},
        {x:'1997',y:20.23},
        {x:'1998',y:19.05},
        {x:'1999',y:18.65},
        {x:'2000',y:19.62},
        {x:'2001',y:18.82},
        {x:'2002',y:19.02},
        {x:'2003',y:19.28},
        {x:'2004',y:19.01},
        {x:'2005',y:18.74},
        {x:'2006',y:18.02},
        {x:'2007',y:17.41},
        {x:'2008',y:17.70},
        {x:'2009',y:17.86},
        {x:'2010',y:17.57},
        {x:'2011',y:17.53},
        {x:'2012',y:16.33},
        {x:'2013',y:16.02},
        {x:'2014',y:14.73}
    ];
    var australia = [                
        {x:'1996',y:14.25},
        {x:'1997',y:15.36},
        {x:'1998',y:15.10},
        {x:'1999',y:14.10},
        {x:'2000',y:13.37},
        {x:'2001',y:13.55},
        {x:'2002',y:12.62},
        {x:'2003',y:11.58},
        {x:'2004',y:11.21},
        {x:'2005',y:11.24},
        {x:'2006',y:11.07},
        {x:'2007',y:11.29},
        {x:'2008',y:11.63},
        {x:'2009',y:11.38},
        {x:'2010',y:11.60},
        {x:'2011',y:11.45},
        {x:'2012',y:12.14},
        {x:'2013',y:12.07},
        {x:'2014',y:13.18}
    ];
    var argentina = [                
        {x:'1996',y:7.01},
        {x:'1997',y:6.75},
        {x:'1998',y:7.16},
        {x:'1999',y:7.30},
        {x:'2000',y:8.26},
        {x:'2001',y:9.20},
        {x:'2002',y:9.18},
        {x:'2003',y:9.45},
        {x:'2004',y:8.87},
        {x:'2005',y:8.60},
        {x:'2006',y:8.65},
        {x:'2007',y:8.11},
        {x:'2008',y:8.32},
        {x:'2009',y:7.76},
        {x:'2010',y:7.83},
        {x:'2011',y:7.66},
        {x:'2012',y:8.45},
        {x:'2013',y:7.68},
        {x:'2014',y:8.22}
    ];                        
    $("#line_chart").shieldChart({
        theme: "light",
        exportOptions: {
            image: false,
            print: false
        },
        primaryHeader: {
            text: "Suicide Rate in Several Countries"
        },
        chartLegend: {
            align: 'right',
            verticalAlign: 'top',
            renderDirection: 'vertical'
        },
        seriesSettings: {
            line: {
                enablePointSelection: true,
                pointMark: {
                    activeSettings: {
                        pointSelectedState: {
                            drawWidth: 4,
                            drawRadius: 4
                        }
                    }
                }
            }
        },
        axisY: {
            title: {
                text: "Suicide Rate (per 100,000 population)"
            }
        },
        dataSeries: [{
            seriesType: 'line',
            collectionAlias: "Japan",
            data: japan
        }, {
            seriesType: 'line',
            collectionAlias: "United States",
            data: us
        }, {
            seriesType: 'line',
            collectionAlias: "France",
            data: france
        }, {
            seriesType: 'line',
            collectionAlias: "Australia",
            data: australia
        }, {
            seriesType: 'line',
            collectionAlias: "Argentina",
            data: argentina
        }]
    });
});