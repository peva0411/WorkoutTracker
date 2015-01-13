/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

((): void=> {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.services',
        /*
         * Feature modules
         */
        'app.auth'
    ]);
})();