$(document).ready(function(){
	(function() {


		$(document).on('click', '.tick', function(){
			if (this.innerHTML == '<i class="fas fa-check"></i>') {
				this.innerHTML = '';
			} else {
				this.innerHTML = '<i class="fas fa-check"></i>';
			}
		});


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
				newLine += '			<button class="btn btn-outline-secondary checkWidth" type="button">'
				newLine += '				<i class="fas fa-times"></i>'
				newLine += '			</button>'
				newLine += '		</div>'
				newLine += '	</div>'
				inputSection.insertAdjacentHTML('beforebegin', newLine)
				document.querySelector('input').value = '';
			}
		});

		$(document).on('click', '.fa-times', function(){
			var perant = this.parentNode.parentNode.parentNode
			perant.outerHTML = '';
		});


	}());
});
