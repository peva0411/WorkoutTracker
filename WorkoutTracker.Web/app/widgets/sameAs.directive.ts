((): void => {
    'use strict';

    angular.module('app.widgets')
        .directive('validateEquals', validateEquals);

    function validateEquals() {
        var directive = <ng.IDirective>{
            restrict: 'A',
            link: link,
            require: 'ngModel'
        };

        function link(scope, element, attrs, ngModelCtrl) {

            function validateEqual(value) {
                var valid = (value === scope.$eval(attrs.validateEquals));
                ngModelCtrl.$setValidity('equal', valid);
                return valid ? value : undefined;
            }

            ngModelCtrl.$parsers.push(validateEqual);
            ngModelCtrl.$formatters.push(validateEqual);

            scope.$watch(attrs.validateEquals, function() {
                ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
            });
        }
        return directive;
    }

})();
 