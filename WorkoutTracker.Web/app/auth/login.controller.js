var app;
(function (app) {
    (function (auth) {
        'use strict';

        var LoginController = (function () {
            function LoginController($state, authTokenService, registerService, loggerService) {
                this.$state = $state;
                this.authTokenService = authTokenService;
                this.registerService = registerService;
                this.loggerService = loggerService;
                var vm = this;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                var registerViewModel = {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.password
                };

                this.registerService.requestToken(registerViewModel).then(function (response) {
                    _this.authTokenService.setToken({ userName: response.userName, access_token: response.access_token });
                    console.log("Logged In");
                    _this.loggerService.success("Welcome back " + response.userName);
                    _this.$state.go("home");
                });
            };
            LoginController.$inject = ['$state', 'app.services.AuthTokenService', 'app.services.RegisterService', 'app.blocks.logger.LoggerService'];
            return LoginController;
        })();

        angular.module('app.auth').controller('app.auth.LoginController', LoginController);
    })(app.auth || (app.auth = {}));
    var auth = app.auth;
})(app || (app = {}));
//# sourceMappingURL=login.controller.js.map
