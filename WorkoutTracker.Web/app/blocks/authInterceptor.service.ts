 module app.blocks {
     'use strict';

     export interface IAuthInterceptorService {
         request(config: ng.IRequestConfig): ng.IRequestConfig;
     }

     class AuthInterceptorService implements IAuthInterceptorService {

         constructor(private authTokenService: app.services.IAuthTokenService) { }

         request(config: ng.IRequestConfig): ng.IRequestConfig {
             var token = this.authTokenService.getToken();

             if (token)
                 config.headers.Authorization = 'Bearer ' + token;

             return config;
         }

         response(response: any) {
             return response;
         }
     }

     factory.$inject = ['app.services.AuthTokenService'];
     function factory(authTokenService: app.services.IAuthTokenService) {
         return new AuthInterceptorService(authTokenService);
     }

     angular.module('app.blocks')
         .factory('app.blocks.AuthInterceptorService', factory);

 }