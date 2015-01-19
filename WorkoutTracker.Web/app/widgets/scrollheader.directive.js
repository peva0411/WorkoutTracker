(function () {
    'use strict';

    angular.module('app.widgets').directive('scrollHeader', scrollHeader);

    function scrollHeader($window, $rootScope) {
        var directive = {
            restrict: 'A',
            link: link
        };

        function link(scope, element) {
            scope.isTransparent = true;

            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 200) {
                    scope.isTransparent = false;
                } else {
                    scope.isTransparent = true;
                }
                scope.$apply();
            });

            $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
                if (toState.name === 'home') {
                    scope.isTransparent = true;
                } else {
                    scope.isTransparent = false;
                }
                // scope.$apply();
            });
        }

        return directive;
    }
})();
//# sourceMappingURL=scrollHeader.directive.js.map
