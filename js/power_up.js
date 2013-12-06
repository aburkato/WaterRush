function FreezePowerUp(count) {
	var count = count;
	var freezing = false;
	this.freeze = function() {
		freezing = true;
		setTimeout(unfreeze, 15 * 1000); //15 seconds
	};
	unfreeze = function() {
		$('#queue .pipe').each(function() {
			$(this).css({"opacity": 1});
		});
		freezing = false;
	};
	this.isFreezing = function() {
		return freezing;
	};
}