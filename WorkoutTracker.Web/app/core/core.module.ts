((): void=> {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular Modules 
         */
        'ngAnimate',
        /*
         * cross app code modules
         */
        'app.blocks.logger',
        /*
         * 3rd party modules
         */
        'ui.router'

    ]);
})();