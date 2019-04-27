$(function () {
    var posts = [
        { category: "5 - 14", count: 20731 },
        { category: "15 - 24", count: 320442 },
        { category: "25 - 34", count: 430755 },
        { category: "35 - 54", count: 1010408 },
        { category: "55 - 74", count: 645749 },
        { category: "75+", count: 250754 }
    ];
    $("#bar_chart").shieldChart({
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
            text: "Total Suicide Based on Age (2000 - 2010)"
        },
        dataSeries: [{
            seriesType: "bar",
            collectionAlias: "Total Case",
            data: $.map(posts, function (item) {
                return {
                    y: item.count,
                    color: item.color
                }
            })
        }]
    });
});