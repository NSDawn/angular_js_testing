/*
an example graph using high charts
*/
Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, '#ffffff'],
                [1, '#ffffff']
            ]
        },
    },
    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Courier", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Courier", Verdana, sans-serif'
        }
    },
    axes: {
        style: {
            color: '#666666',
            font: 'bold 12px "Courier", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Courier, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('examplegraph-container', {

    title: {
        text: 'This is a graph!',
        align: 'left'
    },

    subtitle: {
        text: 'A line plot showing some kind of data',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Foo'
        }
    },

    xAxis: {
        title: {
            text: 'Bar'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1994
        }
    },

    series: [{
        name: 'Egg',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 90305, 56753, 48003]
    }, {
        name: 'Toast',
        data: [15, 15355, 13005, 22905, 25060, 19040,
            56760, 95036, 130506, 145160, 125654]
    }, {
        name: 'Sausage',
        data: [11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663]
    }, {
        name: 'Oatmeal',
        data: [170506, 145006, 150450, 160530, 125060, 110030, 50340,
            20544, 19564, 18593, 13925]
    }, {
        name: 'Burrito',
        data: [null, null, null, null, null, null, 1250,
            15365, 19050, 22000, 21235]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
