module app.services {
    'use strict';

    export interface ITokenResponse {
        access_token: string;
        userName:string;
    }

    export interface IAuthTokenService {
        getToken(): string;
        setToken(token:string): void;
        isAuthenticated(): boolean;
        removeToken(): void;
        requestToken(registerViewModel: app.services.IRegisterViewModel):ng.IPromise<ITokenResponse>;
    }

    class AuthTokenService implements  IAuthTokenService {

        cachedToken: string
        tokenKey: string = 'userToken'

        constructor(private $window: ng.IWindowService, private $q: ng.IQService, private $http: ng.IHttpService) { }

        setToken(token: string) {
            this.cachedToken = token;
            this.$window.localStorage.setItem(this.tokenKey, token);
        }

        getToken(): string {
            if (!this.cachedToken)
                this.cachedToken = this.$window.localStorage.getItem(this.tokenKey);

            return this.cachedToken;
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

        isAuthenticated(): boolean {
            return !!this.getToken();
        }

        removeToken(): void {
            this.cachedToken = null;
            this.$window.localStorage.removeItem(this.tokenKey);
        }
    }

    factory.$inject = ["$window", "$q", "$http"];
    function factory($Window:ng.IWindowService, $q: ng.IQService, $http:ng.IHttpService) {
        return new AuthTokenService($Window, $q, $http);
    }

    angular.module('app.services')
        .factory("app.services.AuthTokenService", factory);
}