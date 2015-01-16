((): void=> {
    'use strict';

    angular.module('app.auth')
        .config(config);

    config.$inject = ["$urlRouterProvider", "$stateProvider"];

    function config($urlRouteProvider: ng.ui.IUrlRouterProvider,
                    $stateProvider: ng.ui.IStateProvider): void {

        $urlRouteProvider.otherwise('/');

        $stateProvider
            .state('register', <ng.ui.IState>{
                url: '/register',
                templateUrl: 'app/auth/register.html',
                controller: 'app.auth.RegisterController',
                controllerAs: 'vm'
            })
            .state('login', <ng.ui.IState>{
                url: '/login',
                templateUrl: 'app/auth/login.html',
                controller: 'app.auth.LoginController',
                controllerAs: 'vm'
            });
           }
})();