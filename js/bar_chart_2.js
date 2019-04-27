$(function () {
    var posts = [
        { category: "Male", count: 2085125 },
        { category: "Female", count: 593174 }
    ];
    $("#bar_chart_2").shieldChart({
        theme: "light",
        axisX: {
            categoricalValues: $.map(posts, function (item) {
                return item.category;
            })
        },
        axisY: {
            title: {
                text: "Total Case"
            }
        },
        seriesSettings: {
            bar: {
                dataPointText: {
                    enabled: true
                },
                color: "#ED1C24"
            }
        },
        primaryHeader: {
            text: "Total Suicide Based on Gender (2000 - 2010)"
        },
        dataSeries: [{
            seriesType: "bar",
            collectionAlias: "Gender",
            data: $.map(posts, function (item) {
                return {
                    y: item.count,
                    color: item.color
                }
            })
        }]
    });
});