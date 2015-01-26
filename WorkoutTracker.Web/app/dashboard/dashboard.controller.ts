module app.dashboard {
    
    interface IDashboardScope {
        
    }

    class DashboardController implements  IDashboardScope {
       
        constructor() {
            var vm = this;
        }

    }

    angular.module('app.dashboard')
        .controller('app.dashboard.DashboardController', DashboardController);

} 