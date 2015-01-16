(function () {
    'use strict';

    angular.module('app.workouts').config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {
        $stateProvider.state('workouts', {
            url: '/workouts',
            templateUrl: 'app/workouts/workouts.html',
            controller: 'app.workouts.WorkoutsController',
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=workouts.routes.js.map
