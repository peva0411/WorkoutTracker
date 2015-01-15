var app;
(function (app) {
    (function (services) {
        'use strict';

        var AuthTokenService = (function () {
            function AuthTokenService($window, $q, $http) {
                this.$window = $window;
                this.$q = $q;
                this.$http = $http;
                this.tokenKey = 'userToken';
            }
            AuthTokenService.prototype.setToken = function (token) {
                this.cachedToken = token;
                this.$window.localStorage.setItem(this.tokenKey, token);
            };

            AuthTokenService.prototype.getToken = function () {
                if (!this.cachedToken)
                    this.cachedToken = this.$window.localStorage.getItem(this.tokenKey);

                return this.cachedToken;
            };

            AuthTokenService.prototype.requestToken = function (registerViewModel) {
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

            AuthTokenService.prototype.isAuthenticated = function () {
                return !!this.getToken();
            };

            AuthTokenService.prototype.removeToken = function () {
                this.cachedToken = null;
                this.$window.localStorage.removeItem(this.tokenKey);
            };
            return AuthTokenService;
        })();

        factory.$inject = ["$window", "$q", "$http"];
        function factory($Window, $q, $http) {
            return new AuthTokenService($Window, $q, $http);
        }

        angular.module('app.services').factory("app.services.AuthTokenService", factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=authToken.service.js.map
