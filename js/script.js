var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'template/dataAnalysis.html',
            controller  : 'dataAnalysisController'
        })
        .when('/todaysweather', {
            templateUrl : 'template/todayWeather.html',
            controller  : 'todayWeatherController'
        })
        .when('/data', {
            templateUrl : 'template/dataAnalysis.html',
            controller  : 'dataAnalysisController'
        })
        .otherwise({
            templateUrl : 'template/dataAnalysis.html',
            controller  : 'dataAnalysisController'
        });
});
