((): void => {
    'use strict';

    angular.module('app.workouts')
        .config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider: ng.ui.IStateProvider):void {
        $stateProvider
            .state('dashboard.workouts', <ng.ui.IState>{
                url: '/workouts',
                templateUrl: 'app/workouts/workouts.html',
                controller: 'app.workouts.WorkoutsController',
                controllerAs: 'vm'
            })
            .state('dashboard.addWorkout', <ng.ui.IState>{
                url: '/addworkout',
                templateUrl: 'app/workouts/addWorkout.html',
                controller: 'app.workouts.AddWorkoutController',
                controllerAs: 'vm'
            })
            .state('dashboard.exercises', <ng.ui.IState>{
                url: '/exercises',
                templateUrl: 'app/workouts/exercises.html'
            });
    }
})();
