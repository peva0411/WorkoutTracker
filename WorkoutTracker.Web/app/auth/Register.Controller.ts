module app.auth {
    'use strict';

    interface IRegisterScope {
        email: string;
        password: string;
        confirmPassword: string;
        submit():void;
    }

    class RegisterController implements IRegisterScope {
        static $inject = ['app.services.AuthTokenService', 'app.services.RegisterService', 'app.blocks.logger.LoggerService'];

        email:string;
        password: string;
        confirmPassword:string;

        constructor(private authTokenService: app.services.IAuthTokenService,
            private registerService: app.services.IRegisterService,
            private loggerService: app.blocks.logger.ILoggerService) {
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
                        this.authTokenService.setToken({ userName: response.userName, access_token: response.access_token });
                        this.loggerService.success("Created account for " + response.userName);

                    });
            }).catch((errorResponse: ng.IHttpPromiseCallbackArg<any>): void=> {
                    var message = errorResponse.data.ModelState["model.Password"];
                    this.loggerService.error(message);
                });
        }
    }

    angular.module('app.auth')
        .controller('app.auth.RegisterController',
                    RegisterController);
}