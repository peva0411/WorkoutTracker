/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

((): void=> {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.services',
        'app.blocks',
        /*
         * Feature modules
         */
        'app.layout',
        'app.home',
        'app.auth',
        'app.workouts'
    ]);
})();