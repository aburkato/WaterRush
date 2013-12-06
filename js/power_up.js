function FreezePowerUp(count) {
	var num = count;
	var freezing = false;

	this.freeze = function() {
		if (num > 0) {
			num--;
			this.display();
			freezing = true;
			setTimeout(unfreeze, 3 * 1000); //15 seconds
		}	
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

	this.display = function() {
		$('#nFreeze').text(num);
	};
	this.display();
}