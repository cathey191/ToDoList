$(document).ready(function(){
	(function() {
		var inputSection = document.querySelector('#inputSection')


		$(document).on('click', '.btn', function(){
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
				var newLine = '<div class="input-group borderBottom" id="inputSection">';
				newLine += '		<div class="input-group-prepend">';
				newLine += '			<button class="btn btn-outline-secondary checkWidth" type="button"></button>';
				newLine += '		</div>';
				newLine += '		<p class="form-control transparent">';
				newLine += 				text;
				newLine += '		</p></div>';
				newLine += '	</div>'
				inputSection.insertAdjacentHTML('beforebegin', newLine)
				document.querySelector('input').value = '';
			}
		});


	}());
});
