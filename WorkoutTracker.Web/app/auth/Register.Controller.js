var app;
(function (app) {
    (function (auth) {
        'use strict';

        var RegisterController = (function () {
            function RegisterController(authTokenService) {
                var vm = this;
                vm.title = "test";
            }
            RegisterController.prototype.submit = function () {
            };
            RegisterController.$inject = ['app.services.AuthTokenService'];
            return RegisterController;
        })();

        angular.module('app.auth').controller('app.auth.RegisterController', RegisterController);
    })(app.auth || (app.auth = {}));
    var auth = app.auth;
})(app || (app = {}));
//# sourceMappingURL=Register.Controller.js.map
