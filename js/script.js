$(document).ready(function(){

	$(".btn").click(function(){
		var classCheck = document.querySelector('i')
		if (this.innerHTML == '<i class="fas fa-check"></i>') {
			this.innerHTML = '';
		} else {
			this.innerHTML = '<i class="fas fa-check"></i>';
		}
	});


});
