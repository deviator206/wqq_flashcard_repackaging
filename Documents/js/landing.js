/**
 * @author deviator206
 */

function LoadingScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['landing'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

LoadingScreen.prototype = {
	setUp : function() {
		this.mApplication.showScreen(this.mDivName);

		var resourceKey, sHTML = this.mApplication.renderTemplate('landing_screen_ui', {
		});
		document.getElementById(this.mDivName).innerHTML = sHTML;
		trace(" Landing Page..");
	}
}

