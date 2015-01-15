(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$locationProvider', '$httpProvider'];

    function config($locationProvider, $httpProvider) {
        // $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('app.blocks.AuthInterceptorService');
    }
})();
//# sourceMappingURL=app.config.js.map
