module app.services {
    'use strict';

    export interface IRegisterService {
        register(registerViewModel: IRegisterViewModel):void;
    }

    export interface IRegisterViewModel {
        email: string;
        password: string;
        confirmPassword: string;
    }

    class RegisterService implements IRegisterService {

        constructor(private $http: ng.IHttpService) {}

        register(registerViewModel: IRegisterViewModel): void {
            this.$http.post("/api/Account/register", registerViewModel)
                .then();
        }
    }

    factory.$inject = ["$http"];
    function factory($http:ng.IHttpService) {
        return new RegisterService($http);
    }

    angular.module('app.services')
        .factory('app.services.RegisterService', factory);
}