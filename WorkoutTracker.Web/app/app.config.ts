((): void=> {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$httpProvider'];

    function config($locationProvider: ng.ILocationProvider, $httpProvider: ng.IHttpProvider) : void {
       // $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('app.blocks.AuthInterceptorService');
    }
})();