(function(){

  'use strict';

  angular.module('myApp')
    .controller('MainCtrl', [ '$scope', '$filter',function($scope,$filter){
      this.foo = 'ASDFAF';
      this.items = ['terran','protoss','zerg'];
      this.selected = '';
      
      var vm = this;
      //vm.foo = 'fooo';
        
      vm.bar = 'BOOST';
      //vm.foo = $filter('lowercase')(vm.foo); // this should result in 'foo'
      vm.bar = $filter('lowercase')(vm.bar); // this should result in 'bar'

    }]);

})();
