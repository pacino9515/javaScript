
$(document).ready(function(){
	$(".day").click(function(){
		$(".day").next(".process").toggle("fast");
	});
});

$(".oneday").click(function(){

	if(confirm("你确定吗?")){
		$(this).css("background-color","#83b09a");
		$(this).children(".square").css("border-right","20px solid #83b09a");
	}

});

