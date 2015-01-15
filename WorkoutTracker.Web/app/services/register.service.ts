module app.services {
    'use strict';

    export interface IRegisterService {
        register(registerViewModel: IRegisterViewModel):ng.IPromise<any>;
    }

    export interface IRegisterViewModel {
        email: string;
        password: string;
        confirmPassword: string;
    }

    class RegisterService implements IRegisterService {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

        register(registerViewModel: IRegisterViewModel): ng.IPromise<any> {
            var deferred = this.$q.defer();

            this.$http.post("/api/Account/register", registerViewModel)
                .success((response: ng.IHttpPromiseCallbackArg<any>): void=> {
                    deferred.resolve(response);
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<any>): void=> {
                     deferred.reject(reason);
            });
            return deferred.promise;

        }
    }

    factory.$inject = ["$http", "$q"];
    function factory($http:ng.IHttpService, $q: ng.IQService) {
        return new RegisterService($http, $q);
    }

    angular.module('app.services')
        .factory('app.services.RegisterService', factory);
}