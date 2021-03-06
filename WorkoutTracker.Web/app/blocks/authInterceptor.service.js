﻿var app;
(function (app) {
    (function (blocks) {
        'use strict';

        var AuthInterceptorService = (function () {
            function AuthInterceptorService(authTokenService) {
                var _this = this;
                this.authTokenService = authTokenService;
                this.request = function (config) {
                    if (config.url.indexOf('api') === -1)
                        return config;

                    var token = _this.authTokenService.getToken();

                    if (token)
                        config.headers.Authorization = 'Bearer ' + token.access_token;

                    return config;
                };
            }
            AuthInterceptorService.prototype.response = function (response) {
                return response;
            };
            return AuthInterceptorService;
        })();

        factory.$inject = ['app.services.AuthTokenService'];
        function factory(authTokenService) {
            return new AuthInterceptorService(authTokenService);
        }

        angular.module('app.blocks').factory('app.blocks.AuthInterceptorService', factory);
    })(app.blocks || (app.blocks = {}));
    var blocks = app.blocks;
})(app || (app = {}));
//# sourceMappingURL=authInterceptor.service.js.map
