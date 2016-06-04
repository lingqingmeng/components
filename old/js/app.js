
var app = angular.module('demo', ['ui.router','ui.bootstrap','highcharts-ng', 'circlegraph','treemap']);




app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url:'/',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/content.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },
            }
        })

        .state('app.home', {
            url:'home',
            views: {
              'content@': {
                templateUrl:'partials/home.html',
                controller: 'HomeCtrl'
              },
            }
        })

        .state('app.charts', {
            url:'charts',
            views: {
              'content@': {
                templateUrl:'partials/charts.html',
                controller: 'ChartCtrl'
              },
              'footer@': {
                templateUrl:'partials/footer2.html',
                controller: 'ChartCtrl'
              },
            }
        })

        .state('app.companies', {
            url:'companies',
            views: {
              'content@': {
                templateUrl:'templates/companies.html',
                controller: 'CompaniesCtrl'
              },
            }
        })

        .state('app.companies.detail', {
          url: '/:id',
          views: {
            'detail@app.companies':{
              templateUrl:'templates/companies-detail.html',
              controller: 'CompaniesDetailCtrl'
            }
          }
        })
;

}]);

app.controller('ChartCtrl', ['$scope', '$http', function ($scope, $http){
  //Data processing
  var tree = {};
  var nodelist = {};
//   _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// => {moe: 30, larry: 40, curly: 50}
  var ran = { a : "foo", b : "coo"};
  console.log('ran',ran);
  $scope.onlyRegion = {};
  $http.get('https://restcountries.eu/rest/v1/all')
    .then(function (res){
      //console.log(res.data);
      _.each(res.data, function (item){
        var k = item.region;
        var a = item.subregion;
        //eror check
        if ((typeof tree !== 'undefined')&&(typeof tree[k] !== 'undefined')&&(tree[k].length > 0)){
          if (!_.contains(tree[k],a)) { tree[k].push(a); } 
        } else { tree[k] = [a];}
        
        
        nodelist[item.name] = _.pick(item, 'population', 'area', 'region', 'subregion');
        
      })
      console.log("nodelist",nodelist);

      //turn array of children in json object list
      for (var k in tree){
        var init = [];
        _.each(tree[k], function (item){ init.push({});})
        tree[k] = _.object(tree[k],init);
      }
      console.log("new tree",tree);

      for (var name in nodelist){
        var node = nodelist[name];
        var item = {};
        item[name] = nodelist[name];
        //console.log('item',item);
        _.extend(tree[node.region][node.subregion],item);
      }
      console.log(tree);
      //console.log('final tree',JSON.stringify(_.pick(tree, 'Americas','Africa')));

      for (var continent in tree){
        _.extend($scope.onlyRegion, tree[continent]);
      }
      console.log("$scope.onlyRegion",$scope.onlyRegion)
      //console.log('onlyregion',JSON.stringify($scope.onlyRegion));
      

    })

  $http.get('https://restcountries.eu/rest/v1/region/europe')
     .then(function (res){
      //console.log(res.data);
      _.each(res.data, function (item){
        $scope.currentArray.push([item.name, item.population, item.languages.length])
        $scope.originalArray.push([item.name, item.population, item.languages.length])
      })

  })

  //ui
  $scope.currentArray = [];
  $scope.originalArray = []
  var langFilter = function(n){
    var temp = $scope.originalArray;
    var update = _.filter($scope.currentArray, function (item){ 
      return item[2] === n;
    });
    $scope.currentArray = update;
    $scope.originalArray = temp;
  }

  $scope.radioModel = '';
  $scope.$watch('radioModel', function() {
     if ($scope.currentArray.length != $scope.originalArray.length){
      $scope.currentArray = $scope.originalArray;
     }
     if ($scope.radioModel === 0){
      $scope.currentArray = $scope.originalArray;
     } else {
      langFilter($scope.radioModel)
     }
     
  });
   //end ui


   
  

}])


app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http){
  
}]);



app.factory('CompanyService', function ($http){
  
  
  var companies = [{
      id: 'EAT24',
      name: 'Genesis',
      description: 'The story of mans creation and fall into exile.'
  },
  {
      id: 'abc123',
      name: 'Ruth',
      description: 'A good woman remains faithful to her family and finds love in a surprising place.'
  },
  {
      id: 3,
      name: 'Esther',
      description: 'A young queen risks her life to save her people from the brink of death.'
  }];

  var getData = function() {
    return $http({method:"GET", url:"/api/companies"}).then(function (res){
        return res.data;
    });
  };

  var findData = function(id) {
    return $http.get("api/companies/" + id).then(function (res){
      return res.data;
    });
  };
    
  return {
      getData: getData,
      findData: findData,
      list: function(){
          return companies;
      },
      find: function(id){
          return _.find(companies, function(company){return company.id == id});
      },
      all: function(){
          return something;
      }
  };
  }
);

app.controller('CompaniesCtrl', ['$scope', 'CompanyService', '$http', function ($scope, CompanyService, $http){
  $scope.companies = CompanyService.list();

  CompanyService.getData().then(function(result) {  // this is only run after $http completes
       $scope.complist = result;
       console.log("better company list",$scope.complist);
    });

  
}]);

app.controller('CompaniesDetailCtrl', ['$scope', '$stateParams', 'CompanyService',
function($scope, $stateParams, CompanyService){
  function epochToString(unix_timestamp){
    console.log('unix_timestamp',unix_timestamp)
    var t = new Date(unix_timestamp);
    return t.toISOString();
  }
  $scope.selectedCompany = CompanyService.find($stateParams.id);
  CompanyService.findData($stateParams.id).then(function (res) {
    _.each(res, function (item){
      item.ft = epochToString(parseInt(item.ts));
    })
    $scope.detail = res;
    console.log('$scope.detail',$scope.detail);
  });
}]);
