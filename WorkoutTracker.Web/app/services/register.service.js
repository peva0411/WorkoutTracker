﻿var app;
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

            RegisterService.prototype.requestToken = function (registerViewModel) {
                var tokenEndpoint = '/token';

                var requestPayload = "grant_type=password&username=" + registerViewModel.email + "&password=" + registerViewModel.password;

                return this.$http({
                    method: 'POST',
                    url: tokenEndpoint,
                    data: requestPayload,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
                    return response.data;
                });
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
