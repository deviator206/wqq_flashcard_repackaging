/**
 * @author deviator206
 */

function LoadingScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['loading'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

LoadingScreen.prototype = {
	setUp : function() {
		this.mApplication.showScreen(this.mDivName);

		var resourceKey, sHTML = this.mApplication.renderTemplate('loading_screen_ui', {
		});
		document.getElementById("loadingScreen").innerHTML = sHTML;


		this.mGameAssetLoader = new PxLoader();
		for (resourceKey in resource_data.images) {
			if (resource_data.images.hasOwnProperty(resourceKey))
				resource_data.images[resourceKey][1] = this.mGameAssetLoader.addImage(getAssetPath("img",resource_data.images[resourceKey][0]));
		}

		this.mGameAssetLoader.addProgressListener(function(c) {
			var a = (parseInt(c.completedCount / c.totalCount * 100) >> 0);
			document.getElementById("loadingMessage").innerHTML = "Loading " + a + " %";
			trace(c)

		});
		this.mGameAssetLoader.addCompletionListener(function() {
			trace(" loading complete....");
		});

		this.mGameAssetLoader.start();

		trace(" loading..");
	}
}

