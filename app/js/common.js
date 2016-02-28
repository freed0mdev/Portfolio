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

	var windowTop = $(window).scrollTop();

	$(window).on("resize", function() {
		windowTop = $(window).scrollTop();
		windowHeight = $(window).height();
		wayPointMinHeight(windowHeight);
		
	});

	$(window).on("scroll", function() {
		windowTop = $(window).scrollTop();
	});

	//sectionHeight
	var windowHeight = $(window).height();
	var waypoint_arr = $('section');

	function wayPointMinHeight(height) {
		$(waypoint_arr).css('min-height', height);
	}; wayPointMinHeight(windowHeight);

	//scrollToAnchor
	$("a[href^='#']").click(function(){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
		return false;
	});

	//waypointsActiveMenu
	var sectionsMenu = $('section');
	var lengthMenu = sectionsMenu.length;
	var i = 0;

	$('section').waypoint(function(direction) {
		$("nav li a.active").removeClass("active");
		if (direction == 'down') {
			i++;
		}
		if (direction == 'up') {
			i--;
		}
		if (i != 0) {
			$("nav li a[href='#" + sectionsMenu[i - 1].id + "']").addClass("active");
		}
	}, {
		offset: 1
	});

});

