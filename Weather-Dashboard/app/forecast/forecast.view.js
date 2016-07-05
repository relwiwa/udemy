(function () {
	angular.module("app.forecast")
		.directive("forecast", function () {
		return {
			restrict: "AE",
			replace: true,
			scope: {
				dp: "="
			},
			template: "<div id='container'></div>",
			link: linkFn
		}
		
		function linkFn(scope, element, attrs) {
			var options = {
				title: {
					text: 'Dashboard'
				},
				xAxis: {
					type: 'datetime',
					labels: {
						formatter: function () {
							return Highcharts.dateFormat('%d %b', this.value);
						}
					}
				},
				yAxis: [{
					labels: {
						format: '{value}°C',
						style: {
							color: Highcharts.getOptions().colors[1]
						}
					},
					title: {
						text: 'Temperature',
						style: {
							color: Highcharts.getOptions().colors[1]
						}
					}
				}, {
					title: {
						text: 'Speed',
						style: {
							color: Highcharts.getOptions().colors[0]
						}
					},
					labels: {
						format: '{value} m/s',
						style: {
							color: Highcharts.getOptions().colors[0]
						}
					},
					opposite: true
				}],
				tooltip: {
					useHTML: true,
					shared: true,
					formatter: function () {
						var s = '<small>' + Highcharts.dateFormat('%d %b', this.x) + '</small><table>';
						$.each(this.points, function (i, point) {
							if (point.y != 0) {
								s += '<tr><td style="color:' + point.series.color + '">' + point.series.name + ': </td>' + '<td style="text-align: right"><b>' + point.y + '</b></td></tr>';
							}
						});
						return s + '</table>';
					}
				},
				legend: {
					layout: 'vertical',
					align: 'left',
					x: 120,
					verticalAlign: 'top',
					y: 100,
					floating: true,
					backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
				},
				series: [{
					name: 'Speed',
					type: 'column',
					yAxis: 1,
					tooltip: {
						valueSuffix: ' m/s'
					},
					data: []
				}, {
					name: 'Temperature',
					type: 'spline',
					tooltip: {
						valueSuffix: '°C'
					},
					data: []
				}]
			}
			
			scope.$watch('dp', onDPChange);
			
			function onDPChange(newDP) {
				if (newDP) {
					initOptions(newDP);
					render();
				}
			}
			
			function initOptions(dp) {
				var data;
				var time = [];
				var temp = [];
				var speed = [];
				
				for (var i = 0; i < dp.list.length; i++) {
					data = dp.list[i];
					
					time.push(new Date(data.dt * 1000));
					temp.push(Math.round(data.main.temp - 273.15));
					var windspeed = 0;
					if (data.wind !== null) {
						windspeed = data.wind.speed;
					}
					speed.push(windspeed);
				}
				options.xAxis.categories = time;
				options.series[1].data = temp;
				options.series[0].data = speed;
			}
			
			function render() {
				element.highcharts(options);
			}
		}
	});
}());