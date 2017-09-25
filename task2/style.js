

var playerNum =document.getElementById("playerNum");
var slider =document.getElementById("slider");
var ghostNum =document.getElementById("numY");
var peopleNum =document.getElementById("numS");



function onChange(){//输入框人数同步修改滑块
	if(playerNum.value>=6&&playerNum.value<=18){
		slider.value=playerNum.value;
	}else{
		alert("请输入正确的人数")
		playerNum.value=6;
		slider.value=6;
	}
	ghostNum.value=parseInt((playerNum.value/3));

	peopleNum.value=playerNum.value-ghostNum.value;

}
function moveChange(){//滑块数值同步修改输入框
	playerNum.value=slider.value;
	ghostNum.value=parseInt((playerNum.value/3));

	peopleNum.value=playerNum.value-ghostNum.value;


}
function reduce(){
	playerNum.value--;
	if(playerNum.value<6){
		playerNum.value=6;
	}else{
		slider.value=playerNum.value;
	}
	ghostNum.value=parseInt((playerNum.value/3));

	peopleNum.value=playerNum.value-ghostNum.value;
}
function plus(){
	playerNum.value++;
	if(playerNum.value>18){

		playerNum.value=18;
	}else{
		slider.value=playerNum.value;
	}
	ghostNum.value=parseInt((playerNum.value/3));

	peopleNum.value=playerNum.value-ghostNum.value;

}
function link(){
	window.location.href="peibi.html";
}

