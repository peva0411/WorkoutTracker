module app.auth {
    'use strict';

    interface ILoginScope {
        email: string;
        password:string;
        login():void;
    }

    class LoginController implements ILoginScope {
        
        email: string;
        password: string;


        static $inject = ['app.services.AuthTokenService', 'app.services.RegisterService'];
        
        constructor(private authTokenService: app.services.IAuthTokenService,
            private registerService: app.services.IRegisterService) {
            var vm = this;
        }

        login(): void {
            var registerViewModel = <app.services.IRegisterViewModel>{
                email: this.email,
                password: this.password,
                confirmPassword: this.password
            };

            this.registerService.requestToken(registerViewModel)
                .then((response: app.services.ITokenResponse): void=> {
                    this.authTokenService.setToken(response.access_token);
                    console.log("Logged In");
            });
        }

    }

    angular.module('app.auth')
        .controller('app.auth.LoginController', LoginController);


}