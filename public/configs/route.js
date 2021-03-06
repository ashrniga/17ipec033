app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../views/feed.html',
        controller:'feedctrl'
    }).when('/profile/:id',{
        templateUrl:'../views/profile.html',
        controller:'profilectrl'
    }).when('/project/:pid',{
        templateUrl:'../views/project.html',
        controller:'projectctrl'
    }).when('/project/:pid/:cid',{
        templateUrl:'../views/project.html',
        controller:'projectctrl'
    }).otherwise({
        redirectTo:'/'
    });
});