using System.Web;
using System.Web.Optimization;

namespace WorkoutTracker.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/font-awesome.css",
                      "~/Content/toastr.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/ng").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-ui-router.js",
                    "~/Scripts/toastr.js",

                    "~/app/services/services.module.js",
                    "~/app/services/authToken.service.js",
                    "~/app/services/register.service.js",
                    "~/app/services/workouts.service.js",
                    
                    //Logger
                    "~/app/blocks/logger/logger.module.js",
                    "~/app/blocks/logger/logger.service.js",

                    //Features
                    "~/app/blocks/blocks.module.js",


                     "~/app/blocks/authInterceptor.service.js",
                    
                    "~/app/layout/layout.module.js",
                    "~/app/layout/shell.controller.js",

                    "~/app/home/home.module.js",
                    "~/app/home/home.routes.js",
                    "~/app/home/home.controller.js",
                     
                     "~/app/auth/auth.module.js",
                    "~/app/auth/auth.routes.js",
                    "~/app/auth/register.controller.js",
                    "~/app/auth/login.controller.js",
                    

                    "~/app/workouts/workouts.module.js",
                    "~/app/workouts/workouts.routes.js",
                    "~/app/workouts/workouts.controller.js",
                    
                    //core
                    "~/app/core/core.module.js",
                    "~/app/core/core.constants.js",

                    "~/app/app.module.js",
                    "~/app/app.config.js"
                ));
        }
    }
}
