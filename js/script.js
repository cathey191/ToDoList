(function() {
	var container = document.querySelector('.container');
	var input = document.querySelector('input');


	// creates list items
	function createItem (e) {
		var key = e.which || e.keyCode;
		if (key === 13) {
			var text = document.querySelector('input').value;
			var newLine = '<div class="input-group borderBottom">';
			newLine += '		<div class="input-group-prepend">';
			newLine += '			<button class="btn btn-outline-secondary checkWidth tick" type="button"></button>';
			newLine += '		</div>';
			newLine += '		<p class="form-control transparent">';
			newLine += 				text;
			newLine += '		</p>';
			newLine += '		<div class="input-group-append">'
			newLine += '			<button class="btn btn-outline-secondary checkWidth remove" type="button">'
			newLine += '				<i class="fas fa-times"></i>'
			newLine += '			</button>'
			newLine += '		</div>'
			newLine += '	</div>'
			inputSection.insertAdjacentHTML('beforebegin', newLine)
			document.querySelector('input').value = '';
		}
	}
	input.addEventListener('keypress', createItem, false);


	// Buttons
	function checkEventObj (e) {
		// removes items
		if (e.target.className == "fas fa-times") {
			var perant = e.target.parentNode.parentNode.parentNode
			perant.outerHTML = '';

		// ticks button
		} else if (e.target.className == 'btn btn-outline-secondary checkWidth tick') {
			if (e.target.innerHTML == '<i class="fas fa-check"></i>') {
				e.target.innerHTML = '';
			} else {
				e.target.innerHTML = '<i class="fas fa-check"></i>';
			}

		// play button
		} else if (e.target.className == 'fas fa-play') {
			console.log('pass');
		}
	}
	container.addEventListener('click', checkEventObj, false);


}());
