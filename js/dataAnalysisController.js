angular.module('scotchApp').controller('dataAnalysisController', function($scope,$http) {
	// alert("hey")
	Highcharts.chart('highchartDiv', {
	    title: {
	        text: 'Birth in Taiwan'
	    },
	    subtitle: {
	        text: 'Source: Ministry of the interiror'
	    },

	    yAxis: {
	        title: {
	            text: 'People'
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
	            pointStart: 2007
	        }
	    },

	    series: [{
	        name: 'Male',
	        data: [106898, 103937, 99492, 87213, 101943, 118848, 103120]
	    }, {
	        name: 'Female',
	        data: [97516, 94796, 91818, 79673, 94684, 110633, 95993]
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
});