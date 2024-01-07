function confirmarGaby() {
	// https://crear.wa.link/
	let url = 'https://wa.link/kgvs05';
	window.open(url, '_blank');
}

function countDown() {
	var countDownDate = new Date('Jan 20, 2024 18:00:00').getTime();

	// Update the count down every 1 second
	var x = setInterval(function () {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById('demo').innerHTML = ' ' + days + 'd  ' + hours + 'h  ' + minutes + 'm  ' + seconds + 's  ';

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById('Pcoundown').innerHTML =
				'<span id="demo" class="end-confirmation bg-yellow p-2">Si confirmaste, te espero el Sábado</span>';
			//document.getElementById('demo').innerHTML = 'EXPIRED';
			let boton = document.getElementById('btnConfirmar');
			boton.style.visibility = 'hidden';
			console.log(boton);
			Confirmar = function () {
				// Your code here
				return false;
			};
		}
	}, 1000);
}
