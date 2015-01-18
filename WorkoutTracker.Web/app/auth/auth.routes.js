(function () {
    'use strict';

    angular.module('app.auth').config(config);

    config.$inject = ["$urlRouterProvider", "$stateProvider"];

    function config($urlRouteProvider, $stateProvider) {
        //$urlRouteProvider.otherwise('/');
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'app/auth/register.html',
            controller: 'app.auth.RegisterController',
            controllerAs: 'vm'
        }).state('login', {
            url: '/login',
            templateUrl: 'app/auth/login.html',
            controller: 'app.auth.LoginController',
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=auth.routes.js.map
