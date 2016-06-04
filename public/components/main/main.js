(function() {

  'use strict';

  angular.module('myApp')

    .directive('mainApp', function(){
      var bindings = {
        bar: '@'
      }

      return {
          bindToController: bindings, //<-- things that will be bound
          controller:'MainCtrl',
          controllerAs:'vm',
          scope:bindings, //<-- isolated scope
          templateUrl: 'components/main/main.html'
      };

    });

})();