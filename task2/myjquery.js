
$(document).ready(function(){
	$(".day").click(function(){
		$(this).next().toggle("fast");
	});

});
var rotation = 0;


$(".oneday").click(function(){
	var rotationNum=($(this).parent().prevAll("div.day").length-1)*7+$(this).prevAll().length;

	var stepNum=$(this).prevAll().length;
switch(stepNum){
	case 0:
	if(rotationNum==rotation){
	if(confirm("请杀手杀人")){
		$(this).css("background-color","#83b09a");
		$(this).children(".square").css("border-right","20px solid #83b09a");
		rotation++;
		localStorage.setItem("rotation",rotation);
		link3();
	}}
	else{
		if($(this).prevAll().length<rotation){
			alert("请进行游戏下一项活动")
		}else{
			alert("请按顺序操作")
		}

	}




	break;
	case 1:
	if(rotationNum==rotation){

	if(confirm("请警察确定被杀者身份")){
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

	break;
	case 2:
	if(rotationNum==rotation){

	if(confirm("请狙击手狙人?")){
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

	break;
	case 3:
	if(rotationNum==rotation){

	if(confirm("请医生救人")){
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

	break;
	case 4:
	if(rotationNum==rotation){

	if(confirm("请亮明死者身份并发表遗言")){
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

	break;
	case 5:
	if(rotationNum==rotation){

	if(confirm("请玩家依次发言")){
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

	break;
	case 6:
	if(rotationNum==rotation){

	if(confirm("请村民们进行投票")){
		$(this).css("background-color","#83b09a");
		$(this).children(".square").css("border-right","20px solid #83b09a");
		rotation++;
		localStorage.setItem("rotation",rotation);
		link3();
	}}
	else{
		if($(this).prevAll().length<rotation){
			alert("请进行游戏下一项活动")
		}else{
			alert("请按顺序操作")
		}

	}

	break;
}

});






$(document).ready(function(){

	rotation=localStorage.getItem("rotation");
	for(var i=0;i<rotation;i++){
		$(".oneday").eq(i).css("background-color","#83b09a");
		$(".square").eq(i).css("border-right","20px solid #83b09a");

	}

})



$(document).ready(function(){
	rotation=localStorage.getItem("rotation");
	if(rotation%7!=0){
		$("#008").text("杀手杀人");
		$("#009").text("杀手请睁眼，杀手请选择要杀的对象");

	}else{
		$("#008").text("投票");
		$("#009").text("请村民们进行投票");

	}


})
