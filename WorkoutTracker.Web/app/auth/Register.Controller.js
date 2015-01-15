var app;
(function (app) {
    (function (auth) {
        'use strict';

        var RegisterController = (function () {
            function RegisterController(authTokenService, registerService) {
                this.authTokenService = authTokenService;
                this.registerService = registerService;
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

                    _this.authTokenService.requestToken(registerViewModel).then(function (response) {
                        _this.authTokenService.setToken(response.access_token);
                    });
                }).catch(function (response) {
                    console.log("Error registering");
                });
            };
            RegisterController.$inject = ['app.services.AuthTokenService', 'app.services.RegisterService'];
            return RegisterController;
        })();

        angular.module('app.auth').controller('app.auth.RegisterController', RegisterController);
    })(app.auth || (app.auth = {}));
    var auth = app.auth;
})(app || (app = {}));
//# sourceMappingURL=Register.Controller.js.map
