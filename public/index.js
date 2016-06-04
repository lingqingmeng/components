(function(){

  'use strict';

  angular.module('myApp', ['ui.router'])
   .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        views: {
          'header': {
            templateUrl:'components/main/partials/header.html',
            controller: function ($scope){

            }
          },
          'content': {
            templateUrl:'components/main/partials/content.html',
            controller: function ($scope){

            }
          },
          'footer': {
            templateUrl:'components/main/partials/footer.html',
            controller: function ($scope){

            }
          }
        }
      })
      .state('user',{
        url: '/user',
        views: {
          'content': {
            templateUrl: 'components/user/partials/user.html',
            controller: function ($scope){
              $scope.items = 'foo';
              console.log("$scope.items: ",$scope.items);
            }
          }  
        }
        
      })
    }
  ])
  .constant("RACES", ['random','protoss', 'zerg', 'terran'])
  .factory('_', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
   }])

})();