((): void => {
    'use strict';

    angular.module('app.dashboard')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider: ng.ui.IStateProvider) : void {
        $stateProvider
            .state('dashboard', <ng.ui.IState>{
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'app.dashboard.DashboardController',
                controllerAs:'vm'
            });
    }
})();
