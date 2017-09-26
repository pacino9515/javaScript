

var playerNum =document.getElementById("playerNum");
var slider =document.getElementById("slider");
var ghostNum =document.getElementById("numY");
var peopleNum =document.getElementById("numS");
var kuangOne=document.getElementById("kuangone")
var kuangTwo=document.getElementById("kuangtwo")




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

var array=[];
function buildArray(){//创建数组
	for(var i=0;i<(ghostNum.value);i++){
		array.push("幽灵");
	}
	for(var j=0;j<peopleNum.value;j++){
		array.push("水民")
	}
	//数组乱序

	var arrayA = [];
    while (array.length > 0) {
        var index = parseInt(Math.random() * (array.length - 1));
        arrayA.push(array[index]);
        array.splice(index, 1);
    }

	//跳转
	window.location.href="fanpai.html";

}
var change =true;
function next(){
	if(!change){
		kuangOne.style.display="flex";
		kuangTwo.style.display="none";
	}else{
		kuangTwo.style.display="flex";
		kuangone.style.display="none";
	}
	change=!change;

}


// function show(){
// 	var i=0;//第几号
// 	var j=0;//用来判断处于何种状态 偶数XXX  奇数XX

// }

