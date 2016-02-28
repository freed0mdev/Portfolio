$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(window).on("resize", function() {
		windowHeight = $(window).height();
		wayPointMinHeight(windowHeight);
		
	});

	$(window).on("scroll", function() {
	});

	//sectionHeight
	var windowHeight = $(window).height();
	var docSections = $('section');

	function wayPointMinHeight(height) {
		$(docSections).css('min-height', height);
	}; wayPointMinHeight(windowHeight);

	//scrollToAnchor
	$("a[href^='#']").click(function(){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
		return false;
	});

	//waypointsActiveMenu
	var i = 0;

	var linkItemRemoveActive = function(i){
		return $("#front a[href='#" + docSections[i - 1].id + "']").removeClass("active");
	};
	var linkItemAddActive = function(i){
		return $("#front a[href='#" + docSections[i - 1].id + "']").addClass("active");
	};

	docSections.waypoint(function(direction) {
		if (direction == 'down') {
			if (i != 0 ) {
				linkItemRemoveActive(i);
			}
			i++;
		} else {
			if (i != 0 ) {
				linkItemRemoveActive(i);
			}
			i--;
		}
		if (i != 0) {
			linkItemAddActive(i);
		}
	}, {
		offset: 1
	});

	//modal
	$('#works').dialog();

});

