(function () {
    'use strict';

    angular.module('app.dashboard').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'app.dashboard.DashboardController',
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=dashboard.routes.js.map
