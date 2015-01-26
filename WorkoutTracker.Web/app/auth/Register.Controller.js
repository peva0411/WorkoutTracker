var app;
(function (app) {
    (function (auth) {
        'use strict';

        var RegisterController = (function () {
            function RegisterController(authTokenService, registerService, loggerService) {
                this.authTokenService = authTokenService;
                this.registerService = registerService;
                this.loggerService = loggerService;
                var vm = this;
            }
            RegisterController.prototype.submit = function () {
                var _this = this;
                var registerViewModel = {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                };

                this.registerService.register(registerViewModel).then(function (response) {
                    console.log("registered");

                    _this.registerService.requestToken(registerViewModel).then(function (response) {
                        _this.authTokenService.setToken({ userName: response.userName, access_token: response.access_token });
                        _this.loggerService.success("Created account for " + response.userName);
                    });
                }).catch(function (errorResponse) {
                    var message = errorResponse.data.ModelState["model.Password"];
                    _this.loggerService.error(message);
                });
            };
            RegisterController.$inject = ['app.services.AuthTokenService', 'app.services.RegisterService', 'app.blocks.logger.LoggerService'];
            return RegisterController;
        })();

        angular.module('app.auth').controller('app.auth.RegisterController', RegisterController);
    })(app.auth || (app.auth = {}));
    var auth = app.auth;
})(app || (app = {}));
//# sourceMappingURL=Register.Controller.js.map
