var app;
(function (app) {
    (function (blocks) {
        /// <reference path="../../../scripts/typings/toastr/toastr.d.ts" />
        (function (logger) {
            var LoggerServivce = (function () {
                function LoggerServivce($log, toastr) {
                    this.$log = $log;
                    this.toastr = toastr;
                    this.showToasts = true;
                    this.toastr.options.positionClass = 'toast-bottom-right';
                }
                LoggerServivce.prototype.error = function (message, data, title) {
                    this.toastr.error(message, title);
                    this.$log.error(['Error: ' + message, data]);
                };
                LoggerServivce.prototype.info = function (message, data, title) {
                    this.toastr.error(message, title);
                    this.$log.info(['Info: ' + message, data]);
                };

                LoggerServivce.prototype.success = function (message, data, title) {
                    this.toastr.success(message, title);
                    this.$log.info('Success: ' + message, data);
                };

                LoggerServivce.prototype.warning = function (message, data, title) {
                    this.toastr.warning(message, title);
                    this.$log.warn("Warning: " + message, data);
                };

                LoggerServivce.prototype.log = function (message, data, title) {
                    this.$log.log(message);
                };
                return LoggerServivce;
            })();

            factory.$inject = ['$log', 'toastr'];
            function factory($log, toastr) {
                return new LoggerServivce($log, toastr);
            }

            angular.module('app.blocks.logger').factory('app.blocks.logger.LoggerService', factory);
        })(blocks.logger || (blocks.logger = {}));
        var logger = blocks.logger;
    })(app.blocks || (app.blocks = {}));
    var blocks = app.blocks;
})(app || (app = {}));
//# sourceMappingURL=logger.service.js.map
