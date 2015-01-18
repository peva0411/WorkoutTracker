((): void => {
    'use strict';

    angular.module('app.home').config(config);

    config.$inject = ["$urlRouterProvider", "$stateProvider"];

    function config($urlRouteProvider: ng.ui.IUrlRouterProvider,
        $stateProvider: ng.ui.IStateProvider): void {

        $urlRouteProvider.otherwise('/');

        $stateProvider
            .state('home', <ng.ui.IState>{
                url: '/',
                templateUrl: '/app/home/home.html',
                controller: 'app.home.HomeController',
                controllerAs: 'home'
            });
    }
})();
 