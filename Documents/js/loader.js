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

		//

		this.mGameAssetLoader = new PxLoader();
		for (resourceKey in resource_data.images) {
			if (resource_data.hasOwnProperty(resourceKey))
				resource_data[resourceKey][1] = this.mGameAssetLoader.addImage(resource_data[resourceKey][0]);
		}

		this.mGameAssetLoader.addProgressListener(this.onProgress.bind(this));
		this.mGameAssetLoader.addCompletionListener(this.onComplete.bind(this));

		this.mGameAssetLoader.start();
	},
	onProgress : function(c) {
		var a = (parseInt(c.completedCount / c.totalCount * 100) >> 0);
		document.getElementById("loadingMessage").innerHTML = "Loading " + a + " %";
		/*if (a % 10 == 0) {
		 if (a / 10 != 10) {
		 var d = a / 10;
		 while (document.getElementById("loadingScreen_front").hasChildNodes()) {
		 document.getElementById("loadingScreen_front").removeChild(document.getElementById("loadingScreen_front").lastChild)
		 }
		 document.getElementById("loadingScreen_front").appendChild(this.mApplication.imgArray["loader_" + d])
		 }
		 }*/
	},
	onComplete : function(data) {
		trace(" loading complete....");

	}
}

