using System.Collections.Generic;
using System.Web.UI.WebControls;
using System.Web;
using System.Web.Optimization;

namespace CodeRepository.Web
{
	public class BundleConfig
	{
		public static void RegisterBundles(BundleCollection bundles)
		{
			// View/Home/Index.cshtml
			bundles.Add(new ScriptBundle("~/bundles/Home/IndexJS").Include(
				"~/Scripts/home.js"
			));
			bundles.Add(new StyleBundle("~/bundles/Home/IndexCSS").Include(
				"~/Styles/home.css"
			));

			// View/Additional/Index.cshtml
			bundles.Add(new ScriptBundle("~/bundles/Additional/IndexJS").Include(
				"~/Scripts/additional.js"
			));
			bundles.Add(new StyleBundle("~/bundles/Additional/IndexCSS").Include(
				"~/Styles/additional.css"
			));

		}
	}
}