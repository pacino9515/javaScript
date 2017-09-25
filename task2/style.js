

var playerNum =document.getElementById("playerNum");
var slider =document.getElementById("slider");
function onChange(){//输入框人数同步修改滑块
	if(playerNum.value>=6&&playerNum.value<=18){
		slider.value=playerNum.value;
	}else{
		alert("请输入正确的人数")
		playerNum.value=6;
		slider.value=6;
	}

}
function moveChange(){//滑块数值同步修改输入框
	playerNum.value=slider.value;

}
function reduce(){
	playerNum.value--;
	if(playerNum.value<6){
		playerNum.value=6;
	}else{
		slider.value=playerNum.value;
	}
}
function plus(){
	playerNum.value++;
	if(playerNum.value>18){

		playerNum.value=18;
	}else{
		slider.value=playerNum.value;
	}

}
