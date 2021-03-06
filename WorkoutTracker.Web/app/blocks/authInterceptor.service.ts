﻿ module app.blocks {
     'use strict';

     export interface IAuthInterceptorService {
         request(config: ng.IRequestConfig): ng.IRequestConfig;
     }

     class AuthInterceptorService implements IAuthInterceptorService {

         constructor(private authTokenService: app.services.IAuthTokenService) {             
         }

         request = (config: ng.IRequestConfig) : ng.IRequestConfig =>{

             if (config.url.indexOf('api') === -1)
                 return config;

             var token =  this.authTokenService.getToken();

             if (token)
                 config.headers.Authorization = 'Bearer ' + token.access_token;

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