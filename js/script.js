// $(document).ready(function(){
// 	$(".btn").click(function(){
// 		$(".far").toggleClass("displayNone");
// 	});
//
// 	// $("#button").click(function(){
// 	// 	this.style.backgroundColor = 'green';
// 	// });
//
// });

(function() {
	var testButton = document.querySelector('#button');


	testButton.addEventListener('click', function (){
		console.dir(testButton);
		if (this.style.backgroundColor = 'green') {
			this.style.backgroundColor = 'blue';
		} else {
			this.style.backgroundColor = 'green';
		}

	}, false);

}());
