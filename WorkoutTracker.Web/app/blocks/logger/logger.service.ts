/// <reference path="../../../scripts/typings/toastr/toastr.d.ts" />
module app.blocks.logger {
    export interface ILoggerService {
        showToasts: boolean;
        error(message: string, data?:any, title?:string): void;
        info(message: string, data?: any, title?: string): void;
        success(message: string, data?: any, title?: string): void;
        warning(message: string, data?: any, title?: string): void;
        log(message: string, data?: any, title?: string):void;
    }

    class LoggerServivce implements ILoggerService{
        constructor(private $log: ng.ILogService, private toastr: Toastr) {
            this.showToasts = true;
            this.toastr.options.positionClass = 'toast-bottom-right';
        }

        showToasts: boolean;

        error(message: string, data?: any, title?: string): void {
            this.toastr.error(message, title);
            this.$log.error(['Error: ' + message, data]);
        }
        info(message: string, data?: any, title?: string): void {
            this.toastr.error(message, title);
            this.$log.info(['Info: ' + message, data]);
        }

        success(message: string, data?: any, title?: string): void {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message: string, data?: any, title?: string): void {
            this.toastr.warning(message, title);
            this.$log.warn("Warning: " + message, data);
        }

        log(message: string, data?: any, title?: string): void {
            this.$log.log(message);
        }
    }

    factory.$inject = ['$log', 'toastr'];
    function factory($log: ng.ILogService, toastr:Toastr) {
        return new LoggerServivce($log, toastr);
    }

    angular.module('app.blocks.logger')
        .factory('app.blocks.logger.LoggerService', factory);
} 