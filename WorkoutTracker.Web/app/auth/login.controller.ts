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


        static $inject = ['$state', 'app.services.AuthTokenService', 'app.services.RegisterService', 'app.blocks.logger.LoggerService'];
        
        constructor(private $state: ng.ui.IStateService,
            private authTokenService: app.services.IAuthTokenService,
            private registerService: app.services.IRegisterService,
            private loggerService: app.blocks.logger.ILoggerService) {
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
                    this.authTokenService.setToken({userName:response.userName, access_token: response.access_token});
                    console.log("Logged In");
                    this.loggerService.success("Welcome back " + response.userName);
                   this.$state.go("home");
             });

        }
    }

    angular.module('app.auth')
        .controller('app.auth.LoginController', LoginController);


}