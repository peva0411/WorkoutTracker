module app.services {
    'use strict';

    
    export interface ITokenResponse {
        access_token: string;
        userName:string;
    }

    export interface IAuthTokenService {
        getToken(): ITokenResponse;
        setToken(token:ITokenResponse): void;
        isAuthenticated(): boolean;
        removeToken(): void;
        
    }

    class AuthTokenService implements  IAuthTokenService {

        cachedToken: ITokenResponse
        tokenKey: string = 'userToken'

        constructor(private $window: ng.IWindowService) { }

        setToken(token: ITokenResponse) {
            this.cachedToken = token;
            this.$window.localStorage.setItem(this.tokenKey, JSON.stringify(token));
        }

        getToken(): ITokenResponse {
            if (!this.cachedToken)
                this.cachedToken = JSON.parse(this.$window.localStorage.getItem(this.tokenKey));

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