var app;
(function (app) {
    (function (services) {
        'use strict';

        var AuthTokenService = (function () {
            function AuthTokenService($window) {
                this.$window = $window;
                this.tokenKey = 'userToken';
            }
            AuthTokenService.prototype.setToken = function (token) {
                this.cachedToken = token;
                this.$window.localStorage.setItem(this.tokenKey, JSON.stringify(token));
            };

            AuthTokenService.prototype.getToken = function () {
                if (!this.cachedToken)
                    this.cachedToken = JSON.parse(this.$window.localStorage.getItem(this.tokenKey));

                return this.cachedToken;
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

        factory.$inject = ["$window"];
        function factory($Window) {
            return new AuthTokenService($Window);
        }

        angular.module('app.services').factory("app.services.AuthTokenService", factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=authToken.service.js.map
