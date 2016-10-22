angular.module('routeApp')
       .config(function($routeProvider, $locationProvider){
           $routeProvider.when('/frodo', {
               templateUrl: 'views/frodo.html'
           }).when('/harrypotter', {
               templateUrl: 'views/harrypotter.html'
           }).when('/masterchief', {
               templateUrl: 'views/masterchief.html'
           }).when('/zach', {
               templateUrl: 'views/zach.html'
           });
//this line lets us use normal looking links
//i.e. /home
//remember, to use this, need to set base href to /
           $locationProvider.html5Mode(true);
       });
