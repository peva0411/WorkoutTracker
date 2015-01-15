var app;
(function (app) {
    (function (services) {
        'use strict';

        var RegisterService = (function () {
            function RegisterService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            RegisterService.prototype.register = function (registerViewModel) {
                var deferred = this.$q.defer();

                this.$http.post("/api/Account/register", registerViewModel).success(function (response) {
                    deferred.resolve(response);
                }).catch(function (reason) {
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            return RegisterService;
        })();

        factory.$inject = ["$http", "$q"];
        function factory($http, $q) {
            return new RegisterService($http, $q);
        }

        angular.module('app.services').factory('app.services.RegisterService', factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=register.service.js.map
