﻿((): void => {
    'use strict';

    angular.module('app.workouts')
        .config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider: ng.ui.IStateProvider):void {
        $stateProvider
            .state('workouts', <ng.ui.IState>{
                url: '/workouts',
                templateUrl: 'app/workouts/workouts.html',
                controller: 'app.workouts.WorkoutsController',
                controllerAs: 'vm'
            });
    }
})();
