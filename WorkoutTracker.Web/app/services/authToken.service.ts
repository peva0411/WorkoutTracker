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
        
    }

    class AuthTokenService implements  IAuthTokenService {

        cachedToken: string
        tokenKey: string = 'userToken'

        constructor(private $window: ng.IWindowService) { }

        setToken(token: string) {
            this.cachedToken = token;
            this.$window.localStorage.setItem(this.tokenKey, token);
        }

        getToken(): string {
            if (!this.cachedToken)
                this.cachedToken = this.$window.localStorage.getItem(this.tokenKey);

            return this.cachedToken;
        }

        isAuthenticated(): boolean {
            return !!this.getToken();
        }

        removeToken(): void {
            this.cachedToken = null;
            this.$window.localStorage.removeItem(this.tokenKey);
        }
    }

    factory.$inject = ["$window"];
    function factory($Window:ng.IWindowService) {
        return new AuthTokenService($Window);
    }

    angular.module('app.services')
        .factory("app.services.AuthTokenService", factory);
}