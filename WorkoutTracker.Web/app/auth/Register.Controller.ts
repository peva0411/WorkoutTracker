module app.auth {
    'use strict';

    interface IRegisterScope {
        email: string;
        password: string;
        confirmPassword: string;
        submit():void;
    }

    class RegisterController implements IRegisterScope {
        static $inject = ['app.services.AuthTokenService', 'app.services.RegisterService'];

        email:string;
        password: string;
        confirmPassword:string;

        constructor(private authTokenService: app.services.IAuthTokenService,
                   private registerService: app.services.IRegisterService) {
            var vm = this;
        }

        submit(): void {
            var registerViewModel = <app.services.IRegisterViewModel>{
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            };

            this.registerService.register(registerViewModel)
                .then((response: any): void=> {
                    console.log("registered");

                    this.registerService.requestToken(registerViewModel)
                        .then((response: app.services.ITokenResponse): void=> {
                            this.authTokenService.setToken(response.access_token);
                    });

            }).catch((response: any): void=> {
                    console.log("Error registering");
            });
        }
    }

    angular.module('app.auth')
        .controller('app.auth.RegisterController',
                    RegisterController);
}