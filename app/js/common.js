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

	//waypoints

	// $('elements').waypoint(function(direction) {
	// 	//codehere
	// });

	$(window).on("resize", function() {
		windowTop = $(window).scrollTop();
		windowHeight = $(window).height();
		wayPointMinHeight(windowHeight);
		activeMenu();
	});

	$(window).on("scroll", function() {
		windowTop = $(window).scrollTop();
		activeMenu();
	});

	//sectionHeight
	var windowHeight = $(window).height();
	var waypoint_arr = $('.waypoint');

	function wayPointMinHeight(height) {
		$(waypoint_arr).css('min-height', height);
	}; wayPointMinHeight(windowHeight);

	//scrollToAnchor
	$("a[href^='#']").click(function(){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
		return false;
	});
	//activemenu
	var windowTop = $(window).scrollTop();

	function activeMenu() {
		$("nav li a.active").removeClass("active");
		if (windowTop > $("#links").offset().top - 200) {$("nav li a[href='#links']").addClass("active");}
		else if (windowTop > $("#gists").offset().top - 200) {$("nav li a[href='#gists']").addClass("active");}
		else if (windowTop > $("#desktop").offset().top - 200) {$("nav li a[href='#desktop']").addClass("active");}
		else if (windowTop > $("#works").offset().top - 200) {$("nav li a[href='#works']").addClass("active");}
		else if (windowTop > $("#about").offset().top - 200) {$("nav li a[href='#about']").addClass("active");}
		else if (windowTop > $("#front").offset().top - 200) {$("nav li a[href='#front']").addClass("active");}
		else {$("nav li a[href='#front']").addClass("active");};
	}; activeMenu();

});

