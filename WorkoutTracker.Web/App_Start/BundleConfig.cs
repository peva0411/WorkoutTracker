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
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/ng").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-ui-router.js",
                    //Features
                    "~/app/blocks/blocks.module.js",
                    "~/app/blocks/authInterceptor.service.js",
                    "~/app/services/services.module.js",
                    "~/app/services/authToken.service.js",
                    "~/app/services/register.service.js",
                    "~/app/auth/auth.module.js",
                    "~/app/auth/auth.routes.js",
                    "~/app/auth/register.controller.js",
                    "~/app/core/core.module.js",
                    "~/app/app.module.js",
                    "~/app/app.config.js"
                ));
        }
    }
}
