module app.auth {
    'use strict';

    interface IRegisterScope {
        title: string;
        password: string;
        confirmPassword: string;
        submit():void;
    }

    class RegisterController implements IRegisterScope {
        static $inject = ['app.services.AuthTokenService'];

        title:string;
        password: string;
        confirmPassword:string;

        constructor(authTokenService: app.services.IAuthTokenService) {
            var vm = this;
            vm.title = "test";
        }
        submit(): void {
           
        }
    }

    angular.module('app.auth')
        .controller('app.auth.RegisterController',
                    RegisterController);
}