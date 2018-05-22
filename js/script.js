$(document).ready(function(){
	(function() {
		var cover = document.querySelector('.container');
		

		// Creates list item
		document.querySelector('input').addEventListener('keypress', function (e) {
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
		});


		// Buttons
		function checkEventObj (e) {
			// remove button
			if (e.target.className == "btn btn-outline-secondary checkWidth remove") {
				var perant = e.target.parentNode.parentNode
				perant.outerHTML = '';

			// tick button
			} else if (e.target.className == 'btn btn-outline-secondary checkWidth tick') {
				if (e.target.innerHTML == '<i class="fas fa-check"></i>') {
					e.target.innerHTML = '';
				} else {
					e.target.innerHTML = '<i class="fas fa-check"></i>';
				}
			}

		}

		cover.addEventListener('click', checkEventObj, false);


	}());
});
