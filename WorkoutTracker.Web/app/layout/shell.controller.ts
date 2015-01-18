module app.layout {
    
    interface IShellScope {
        user: string;
        logout(): void;
        isAuthenticated():boolean;
    }


    class ShellController implements  IShellScope{
        
        user:string;

        static $inject = ['$state', 'app.services.AuthTokenService'];

        constructor(private $state: ng.ui.IStateService,
            private authTokenService: app.services.IAuthTokenService) {
            var vm = this;
        }

        logout = (): void=> {
            this.authTokenService.removeToken();
            this.$state.go('home');
        } 

        isAuthenticated = (): boolean => {
            var token = this.authTokenService.getToken();
            if (token) {
                this.user = token.userName;
            } else {
                this.user = "";
            }
            return this.authTokenService.isAuthenticated();
        }
    }

    angular.module('app.layout').controller('app.layout.ShellController', ShellController);


} 