module app.services {
    'use strict';

    export interface IRegisterService {
        register(registerViewModel: IRegisterViewModel): ng.IPromise<any>;
        requestToken(registerViewModel: app.services.IRegisterViewModel): ng.IPromise<ITokenResponse>;
    }

    export interface IRegisterViewModel {
        email: string;
        password: string;
        confirmPassword: string;
    }

    export interface ILoginErrorResponse {
        error_description: string
    }

    class RegisterService implements IRegisterService {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

        register(registerViewModel: IRegisterViewModel): ng.IPromise<any> {
            var deferred = this.$q.defer();

            this.$http.post("/api/Account/register", registerViewModel)
                .success((response: ng.IHttpPromiseCallbackArg<any>): void => {
                    deferred.resolve(response);
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<any>): void => {
                     deferred.reject(reason);
            });
            return deferred.promise;
        }

        requestToken(registerViewModel: app.services.IRegisterViewModel): ng.IPromise<ITokenResponse> {
            var tokenEndpoint = '/token';

            var requestPayload = "grant_type=password&username="
                + registerViewModel.email
                + "&password="
                + registerViewModel.password;

            return this.$http(<ng.IRequestConfig>{
                method: 'POST',
                url: tokenEndpoint,
                data: requestPayload,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then((response: ng.IHttpPromiseCallbackArg<ITokenResponse>): ITokenResponse=> {
                    return response.data;
                });

        }

    }

    factory.$inject = ["$http", "$q"];
    function factory($http:ng.IHttpService, $q: ng.IQService) {
        return new RegisterService($http, $q);
    }

    angular.module('app.services')
        .factory('app.services.RegisterService', factory);
}