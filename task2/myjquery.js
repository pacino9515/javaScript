
$(document).ready(function(){
	$(".day").click(function(){
		$(".day").next(".process").toggle("fast");
	});

});
var rotation = 0;

$(".oneday").click(function(){
	if($(this).prevAll().length==rotation){


	if(confirm("你确定吗?")){
		$(this).css("background-color","#83b09a");
		$(this).children(".square").css("border-right","20px solid #83b09a");
		rotation++;
	}}
	else{
		if($(this).prevAll().length<rotation){
			alert("请进行游戏下一项活动")
		}else{
			alert("请按顺序操作")
		}

	}

});

