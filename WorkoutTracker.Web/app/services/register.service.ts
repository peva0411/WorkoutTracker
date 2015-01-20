module app.services {
    'use strict';

    export interface IRegisterService {
        register(registerViewModel: IRegisterViewModel): ng.IHttpPromise<void>;
        requestToken(registerViewModel: app.services.IRegisterViewModel): ng.IPromise<ITokenResponse>;
    }

    export interface IRegisterViewModel {
        email: string;
        password: string;
        confirmPassword: string;
    }

    export interface ILoginErrorResponse {
        error_description: string;
    }

    export interface IModelState {
        modelPassword: string[];
    }

    export interface IModelStateError {
        Message: string;
        ModelState: IModelState;
    }


    class RegisterService implements IRegisterService {

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

        register(registerViewModel: IRegisterViewModel): ng.IHttpPromise<void> {
            return this.$http.post<any>('/api/Account/register', registerViewModel);

            //    return this.$http.post<void>("/api/Account/register", registerViewModel)
            //        .then<void>((response: ng.IHttpPromiseCallbackArg<void>): void=> {
            //            return response.data;
            //    }, (errorResponse : ng.IHttpPromiseCallbackArg<any>): string)=>
            //    {

            //});
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