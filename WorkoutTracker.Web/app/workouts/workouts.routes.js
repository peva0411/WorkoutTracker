(function () {
    'use strict';

    angular.module('app.workouts').config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider.state('dashboard.workouts', {
            url: '/workouts',
            templateUrl: 'app/workouts/workouts.html',
            controller: 'app.workouts.WorkoutsController',
            controllerAs: 'vm'
        }).state('dashboard.addWorkout', {
            url: '/addworkout',
            templateUrl: 'app/workouts/addWorkout.html',
            controller: 'app.workouts.AddWorkoutController',
            controllerAs: 'vm'
        }).state('dashboard.exercises', {
            url: '/exercises',
            templateUrl: 'app/workouts/exercises.html'
        });
    }
})();
//# sourceMappingURL=workouts.routes.js.map
