
$(document).ready(function(){
	$(".day").click(function(){
		$(this).next().toggle("fast");
	});

});
var rotation = 0;


$(".oneday").click(function(){
	var rotationNum=($(this).parent().prevAll("div.day").length-1)*7+$(this).prevAll().length;

	if(rotationNum==rotation){

	if(confirm("你确定吗?")){
		$(this).css("background-color","#83b09a");
		$(this).children(".square").css("border-right","20px solid #83b09a");
		rotation++;
		localStorage.setItem("rotation",rotation);
	}}
	else{
		if($(this).prevAll().length<rotation){
			alert("请进行游戏下一项活动")
		}else{
			alert("请按顺序操作")
		}

	}

});



$(document).ready(function(){

	rotation=localStorage.getItem("rotation");
	for(var i=0;i<rotation;i++){
		$(".oneday").eq(i).css("background-color","#83b09a");
		$(".square").eq(i).css("border-right","20px solid #83b09a");

	}
})

