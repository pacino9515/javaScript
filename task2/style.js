

var playerNum =document.getElementById("playerNum");
var slider =document.getElementById("slider");
var ghostNum =document.getElementById("numY");
var peopleNum =document.getElementById("numS");
var kuangOne=document.getElementById("kuangone")
var kuangTwo=document.getElementById("kuangtwo")
var shuimingWord=document.getElementById("shuimingWord");
var ghostWord=document.getElementById("ghostWord");




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
function reduce(){ //左侧数值减少
	playerNum.value--;
	if(playerNum.value<6){
		playerNum.value=6;
	}else{
		slider.value=playerNum.value;
	}
	ghostNum.value=parseInt((playerNum.value/3));

	peopleNum.value=playerNum.value-ghostNum.value;
}
function plus(){//右侧数值增加
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


// var array=[];
array=[];

function buildArray(){//创建数组


	for(var i=0;i<(ghostNum.value);i++){
		array.push("幽灵");
	}
	for(var j=0;j<peopleNum.value;j++){
		array.push("水民")
	}


	//数组乱序
	 var len = array.length;
    for (var r = 0; r < len - 1; r++) {
        var index = parseInt(Math.random() * (len - r));
        var temp = array[index];
        array[index] = array[len - r - 1];
        array[len - r - 1] = temp;
    }
    //检测浏览器是否支持
    if(typeof(Storage) !== "undefined"){
    	//先将数组转换成JSON对象再
    	localStorage.setItem("lastname", JSON.stringify(array));//存入数组
    	localStorage.setItem("playerNum",playerNum.value);//总玩家



    }else{
    	alert("抱歉你的浏览器不支持")
    }





	//跳转
	window.location.href="fanpai.html";

}
var change =true;
var NO=0;
function next(){
	// var array=JSON.parse(localStorage.getltem("key"))
	var array=JSON.parse(localStorage.getItem("lastname"));
	var playerNum=localStorage.getItem("playerNum");
	if(NO<playerNum){


	//这个函数里面没有调用到数组array[]的值
	//待解决   数组乱序和函数调用都没有问题  大约是作用域？
	//？？？？？？
	if(!change){
		kuangOne.style.display="flex";
		kuangTwo.style.display="none";
		var numbers=document.getElementById("numbers1");
		numbers.innerHTML=(NO+1);




	}else{
		kuangTwo.style.display="flex";
		kuangone.style.display="none";
		var numbers=document.getElementById("numbers2");
		numbers.innerHTML=(NO+1);
		var role=document.getElementById("role");

		role.innerHTML="角色:"+array[NO];//这里没问题



		NO++;

	}
	change=!change;
	if(NO<playerNum){
		var bottomText=document.getElementById("watch");
		bottomText.innerHTML="查看"+(NO+1)+"号身份";
	}else{
		var bottomText=document.getElementById("watch");
		bottomText.innerHTML="法官查看";

	}



}else{

	window.location.href="peibi.html";
}
	// alert(bottomText.innerHTML)
	// var add=NO+1;
	// bottomText.innerHTML+=add;
	// bottomText.innerHTML+="号身份"


}



