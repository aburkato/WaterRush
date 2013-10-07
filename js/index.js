    angular.module('PipesGame', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('store', {
            url: "/store",
            templateUrl: "store.html"
        })
    });