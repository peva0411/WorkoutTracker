(function () {
    'use strict';

    angular.module('app.home').config(config);

    config.$inject = ["$urlRouterProvider", "$stateProvider"];

    function config($urlRouteProvider, $stateProvider) {
        $urlRouteProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/app/home/home.html',
            controller: 'app.home.HomeController',
            controllerAs: 'home'
        });
    }
})();
//# sourceMappingURL=home.routes.js.map
