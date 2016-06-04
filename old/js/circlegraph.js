
angular.module('circlegraph',[])
  .directive('hcPie', function () {
  return {
    restrict: 'C',
    replace: true,
    scope: {
      items: '='
    },
    controller: function ($scope, $element, $attrs) {

    },
    template: '<div id="container" style="margin: 0 auto">not working</div>',
    link: function (scope, element, attrs) {
      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Europe countries by population, 2015'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage}%</b>',
          percentageDecimals: 2
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              color: '#000000',
              connectorColor: '#000000',
              formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + Math.round(this.percentage*100)/100 + ' %';
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Percent representation',
          data: scope.items
        }]
      });
      scope.$watch("items", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
      
    }
  }
});