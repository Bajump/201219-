$(document).ready(function(){
	var button_status = 1;
	$(".button").on("click",function(){
		if (button_status == 0) {
		$(".cube").css("transform", "rotate3d(-15,44,-10, -45deg)")
			button_status = 1;
		} else if
			(button_status == 1) {
				$(".cube").css("transform", "rotate3d(0,0,0,0deg)")
				button_status = 0;
			}
	})

	$(".button").on("mouseover", function () {
		$(".img").attr("src", "./img/ddd.png")
	})
	$(".button").on("mouseleave", function () {
		$(".img").attr("src", "./img/dd.png")
	})
})