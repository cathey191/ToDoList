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
				inputSection.insertAdjacentHTML('beforebegin', '<div class="input-group borderBottom" id="inputSection">'+'<div class="input-group-prepend">'+'<button class="btn btn-outline-secondary checkWidth" type="button">'+'</button>'+'</div>'+'<p class="form-control transparent" aria-label="Text input with checkbox" aria-describedby="basic-addon1">'+text+'</p>'+'</div>')
				document.querySelector('input').value = '';
			}
		});


	}());
});
