$(function() {
	// Init static resources for game-play.
	// Init images for tiles and water flow.
	IMAGES = initImages();
	// Init connections.
	CONNECTIONS = initConnections();

	//level dependent
	var baseScore = 100;
	var scoreMultiplier = 2;
	var totalSquares = 46;

	//not level dependent
	var tilesPlaced = 0;
	var points = baseScore*scoreMultiplier;
	var boomstate = false;
	var freezePU = new FreezePowerUp(3);

	for (var i = 0; i < 6; i++) {
		var pipe = makePipe();
	}
	displayScore(points);

	function calculateScore() {
		var riverLength = lengthOfRiverbed();
		var unusedTiles = tilesPlaced - riverLength;

		points = points - unusedTiles*500 + baseScore;

		points = points*(scoreMultiplier + ((20 < riverLength*100/totalSquares) ? 10 : 0));

		displayScore(points);
	}

	function lengthOfRiverbed() {

		var next = getRight($('#board .row .start').first());
		var length = 0;
		var direction = 'e';
		var currentPoints = 0;

		points = 0;

		while (next.is('.pipe')) {
			var id = next.attr('data-pipeType');
			if (direction in CONNECTIONS[id]) {

				var ns = ['n', 's'].indexOf(direction) > -1;
				var both = ((next.attr('data-flow-' + (ns ? 'e' : 'n')) == 1)
					|| (next.attr('data-flow-' + (ns ? 'w' : 's')) == 1));

				direction = CONNECTIONS[id][direction];
				if (direction == 'n') { next = getTop(next); }
				else if (direction == 'e') { next = getRight(next); }
				else if (direction == 's') { next = getBottom(next); }
				else if (direction == 'w') { next = getLeft(next); }
			} else {
				break;
			}
			length++;
			if(next.hasClass('star')){
				points += 1500;
			}
			else{
				points += 1000;
			}
		}

		return length;
	}

	function reQ () {
		$('#queue .pipe').each(function() {
			$(this).remove();
		});

		for (var i = 0; i < 6; i++)
			makePipe();
	}

	function makePipe () {
		var id = Math.floor(Math.random()*7);
		var pipe = $('<div class="pipe"></div>')
		.draggable({ revert: 'invalid' })
		.attr('data-pipeType', id)
		.css({ 'background-image': 'url("images/' + IMAGES[id].base + '")' });

		if (freezePU.isFreezing()){ //If the freeze power is used, the pipes are hidden
			pipe.css({ 'opacity': 0 });
		}

		$('#queue').prepend(pipe);
		return pipe;
	}

	function getRight (pipe) {
		return pipe.next('.pipe, .end, .start, .slot');
	};

	function getLeft (pipe) {
		return pipe.prev('.pipe, .end, .start, .slot');
	};

	function getTop (pipe) {
		return pipe.parent().prev().children().eq(pipe.index()).filter('.pipe, .end, .start, .slot');
	};

	function getBottom (pipe) {
		return pipe.parent().next().children().eq(pipe.index()).filter('.pipe, .end, .start, .slot');
	};

	function makeSlot () {
		var slot = $('<div class="slot"></div>');

		slot.droppable({
			drop: function( event, ui ) {
				var index = $(this).index();
				$('#board .row').each(function() { $(this).children().eq(index).removeClass('over'); });
				$(this).siblings().each(function() { $(this).removeClass('over'); });

				var pipe = ui.draggable;
				if(this.classList.contains('star')){
					pipe.addClass('star');
				}

				pipe.click(function(){
					if(boomstate){
						boomstate = false;

						var newSlot = makeSlot();

						if(this.classList.contains('star')){
							newSlot.addClass('star');
						}

						$(this).replaceWith(newSlot);

						tilesPlaced--;
					}
				});

				$(this).replaceWith(pipe);
				pipe.draggable('destroy');
				pipe.css({ 'position': '', 'left': '', 'top': '' });

				pipe = makePipe();
				pipe.hide().slideDown();

				tilesPlaced++;

				displayScore(points);
				start();
			},
			over: function( event, ui ) {
				var index = $(this).index();
				$('#board .row').each(function() { $(this).children().eq(index).addClass('over'); });
				$(this).siblings().each(function() { $(this).addClass('over'); });
			},
			out: function( event, ui ) {
				var index = $(this).index();
				$('#board .row').each(function() { $(this).children().eq(index).removeClass('over'); });
				$(this).siblings().each(function() { $(this).removeClass('over'); });
			}
		});

return slot;
};

$("#freeze").click(
	function() { 
		freezePU.freeze(); }
		);

$("#reQueue").click(
	function() { reQ(); }
	);

$("#boom").click(
	function() { boomstate = true; }
	);

$('#exitLevel').click(function(){
	window.open('home.html', '_self', false);
});

$('.slot').replaceWith(function(){
	if (this.classList.contains('star')) {
		return makeSlot().addClass('star');
	} else {
		return makeSlot();
	}
});

var fps = 30;

function update() {
	var next = getRight($('#board .row .start').first());
	var direction = 'e';

	calculateScore();

	while (next.is('.pipe')) {
		var id = next.attr('data-pipeType');
		if (direction in CONNECTIONS[id]) {
			var flow = parseFloat(next.attr('data-flow-' + direction) || 0);
			flow = Math.min(flow + (1.0 / fps)*(1.0/7.0), 1);

			if(!freezePU.isFreezing()) {
				next.attr('data-flow-' + direction, flow);
			}

			var ns = ['n', 's'].indexOf(direction) > -1;
			var both = ((next.attr('data-flow-' + (ns ? 'e' : 'n')) == 1)
				|| (next.attr('data-flow-' + (ns ? 'w' : 's')) == 1));

			next.css({ 'background-image': 'url("images/' + IMAGES[id]['flow'][direction + (both ? 'b' : '')][Math.min(3, Math.floor(flow * 4))] + '")' });
			if (flow < 1) { return; }

			direction = CONNECTIONS[id][direction];
			if (direction == 'n') { next = getTop(next); }
			else if (direction == 'e') { next = getRight(next); }
			else if (direction == 's') { next = getBottom(next); }
			else if (direction == 'w') { next = getLeft(next); }
		} else {
			defeat();
			return;
		}
	}

	if (next.is('.slot')) {
		next.addClass('spill');
		defeat();
	} else if (next.is('.end') && direction == 's') {
		next.addClass('done');
		victory();
	} else {
		defeat();
	}

};

function victory() {
	stop();
	points = Math.max(0, points);
	alert('You win!. You have got ' + points + ' points');
	window.location = 'home.html';
}

function defeat() {
	stop();
	points = Math.max(0, points);
	alert('You lose! You have got ' + points + ' points');
	window.location = 'home.html';
}

var updateId = -1;
function start() {
	if (updateId == -1) {
		updateId = setInterval(update, 1000 / fps);
	}
}

function displayScore (score) {
	$('#score').text("score: " + score);
}

function stop() {
	clearInterval(updateId);
}
});