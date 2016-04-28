// coded by jade allen cook

// configuring routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'home'
    }).otherwise({
        redirectTo: '/'
    });
}]);