var app;
(function (app) {
    (function (auth) {
        'use strict';

        var LoginController = (function () {
            function LoginController(authTokenService, registerService) {
                this.authTokenService = authTokenService;
                this.registerService = registerService;
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
                    _this.authTokenService.setToken(response.access_token);
                    console.log("Logged In");
                });
            };
            LoginController.$inject = ['app.services.AuthTokenService', 'app.services.RegisterService'];
            return LoginController;
        })();

        angular.module('app.auth').controller('app.auth.LoginController', LoginController);
    })(app.auth || (app.auth = {}));
    var auth = app.auth;
})(app || (app = {}));
//# sourceMappingURL=login.controller.js.map
