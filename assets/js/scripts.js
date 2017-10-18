// List Items (add classes) //////////////////////////////
		$("#servicesItems").addClass("list-group");
		$("#servicesItems li").addClass("list-group-item grow animated");
		$(".aboutBox").addClass("grow");
		
		// Scroll-To Buttons ///////////////////
		$("#homeButton").click(function() {
			$('html,body').animate({
			scrollTop: $("#home").offset().top},
			'slow');
		});
		
		$("#aboutButton").click(function(e) {
			e.preventDefault();
			var offset = 0;
			var target = this.hash;
			if ($(this).data('offset') != undefined) offset = $(this).data('offset');
			$('html,body').animate({
			scrollTop: $("#aboutSection").offset().top - offset},
			'slow');
		});
		
		$("#servicesButton").click(function(e) {
			e.preventDefault();
			var offset = 0;
			var target = this.hash;
			if ($(this).data('offset') != undefined) offset = $(this).data('offset');
			$('html,body').animate({
			scrollTop: $("#servicesSection").offset().top - offset},
			'slow');
		});
			
		$("#contactButton").click(function(e) {
			e.preventDefault();
			var offset = 0;
			var target = this.hash;
			if ($(this).data('offset') != undefined) offset = $(this).data('offset');
			$('html,body').animate({
			scrollTop: $("#contactSection").offset().top - offset},
			'slow');
		});
			
		$("#quoteButton").click(function() {
			$('html,body').animate({
			scrollTop: $("#quoteIcon").offset().top},
			'slow');
		});
		
		
		$("#subscribeButton").click(function() {
			$('html,body').animate({
			scrollTop: $("#quoteIcon").offset().top},
			'slow');
		});
		
		// Modal ////////////////////
		
		// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		var btn = document.getElementById("quoteButton");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		// When the user clicks submit, close modal
		$('#subscribeButton').onclick = function() {
			modal.style.display = "none";
		}