$(document).ready(() => {
	$(".slider").owlCarousel({
		loop: true,
		nav:true,
		items: 1,
		itemElement: "slide-wrap",
		'animation': 'fadeIn'
	});

	$(".bottom-slider").owlCarousel({
		loop: true,
		nav:true,
		items: 1,
		itemElement: "slide-wrap",
		'animation': 'fadeIn'
	});
});

$('#datetimepicker1').datetimepicker({
    format: 'HH:mm'
});

$('#datetimepicker2').datetimepicker({
    locale: 'nl',
    format: 'L',
    calendarWeeks: true,
    showTodayButton: true
});


$(".toggle-menu").click(function() {
	$(this).toggleClass("on");
	$(".main-menu-1").toggleClass("on");
});

function openNav() {
    document.getElementById("mobileMenu").style.width = "200px";
    // document.getElementById("container-main").style.marginLeft = "150px";
    document.body.style.backgroundColor = "rgba(38,38,38,0.4)";

    const navBtn = document.getElementById("navBtn");
    navBtn.setAttribute('onclick','closeNav()');
    navBtn.innerHTML = '&#9776; close';
}

// кнопка закрытия
function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
    // document.getElementById("container-main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";

    const navBtn = document.getElementById("navBtn");
    navBtn.setAttribute('onclick', 'openNav()');
    navBtn.innerHTML = '&#9776; open';
}

// document.addEventListener('DOMContentLoaded', function() {

// 	// let flag = false;

// 	// function isInView(elem){
// 	//    return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
// 	// }

// 	// $(window).scroll(function(){
// 	//    if (isInView($('#ddd')) && !flag) {
// 	//      document.querySelector('.block-history .title').style.color = '#f0f';
// 	//       flag = true;
// 	//    }
// 	// })

// 	// if (localStorage.getItem("margin") !== null) {
// 		// var margin_ = localStorage.getItem("margin");
// 		//document.querySelector('.block-history').style.marginLeft = 0;
// 	// }

// 	// localStorage.setItem("margin", "0")
// });
