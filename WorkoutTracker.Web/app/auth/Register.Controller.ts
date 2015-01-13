module app.auth {
    'use strict';

    interface IRegisterScope {
        title:string;
    }

    class RegisterController implements IRegisterScope {
        static $inject = ['app.services.AuthTokenService'];

        title:string;

        constructor(authTokenService: app.services.IAuthTokenService) {
            var vm = this;
            vm.title = "test";
        }
    }

    angular.module('app.auth')
        .controller('app.auth.RegisterController',
                    RegisterController);
}