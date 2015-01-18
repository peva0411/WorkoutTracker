module app.home {
    interface IHomeScope {
        
    }

    class HomeController implements IHomeScope {
        
        constructor() {
            var vm = this;
        }
    }


    angular.module('app.home')
        .controller('app.home.HomeController', HomeController);

} 