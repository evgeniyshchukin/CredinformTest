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
			bundles.Add(new ScriptBundle("~/bundles/home/IndexJS").Include(
				"~/Scripts/home.js"
			));
			bundles.Add(new StyleBundle("~/bundles/home/IndexCSS").Include(
				"~/Styles/home.css"
			));
	
		}
	}
}