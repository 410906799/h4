// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '淡水，澎湖，鞍部月平均溫度圖'
    },
    
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '淡水',
        marker: {
            symbol: 'square'
        },
        data: [15.4, 15.7, 17.7, 21.4, 24.7, 27.3, 29.0, 28.7, 26.9, 23.6, 21.0, 17.3, 
            
           ]

    }, {
        name: '澎湖',
        marker: {
            symbol: 'diamond'
        },
        data: [{
           
        }, 17.1, 17.4, 19.9, 23.2, 25.9, 27.9, 28.9, 28.6, 28.0, 25.5, 22.7, 19.1, ]
    }, {
        name: '鞍部',
        marker: {
            symbol: 'diamond'
        },
        data: [{
           
        }, 10.3, 11.2, 11.6, 13.2, 19.6, 22.2, 23.4, 23.0, 21.1, 21.1, 17.9, 15.4, 11.8, ]
    }]
});
