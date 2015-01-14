var app;
(function (app) {
    (function (services) {
        'use strict';

        var RegisterService = (function () {
            function RegisterService($http) {
                this.$http = $http;
            }
            RegisterService.prototype.register = function (registerViewModel) {
                this.$http.post("/api/Account/register", registerViewModel).then();
            };
            return RegisterService;
        })();

        factory.$inject = ["$http"];
        function factory($http) {
            return new RegisterService($http);
        }

        angular.module('app.services').factory('app.services.RegisterService', factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=register.service.js.map
