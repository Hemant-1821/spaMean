angular.module('angappRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider

    .when('/home',{
      templateUrl:'views/home.html',
      controller: 'HomeController'
    })
    .when('/about',{
      templateUrl:'views/about.html',
      controller: 'AboutController'
    })
    .when('/read',{
      templateUrl:'views/read.html',
      controller:'ReadController'
    })
    .when('/add',{
      templateUrl:'views/add.html',
      controller: 'AddController'
    })
    .when('/update',{
      templateUrl:'views/update.html',
      controller: 'UpdateController'
    })
    .when('/contact',{
      templateUrl:'views/content.html',
      controller: 'ContactController'
    });
  $locationProvider.html5Mode(true);
}]);
