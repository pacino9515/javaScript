

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
		alert("再多找两个人吧")
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
		alert("要不我们分两桌？")
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
    //检测是否输入词组
    var shuimingWord=document.getElementById("shuimingWord");
    // alert(shuimingWord.value)
    localStorage.setItem("shuimingWord",shuimingWord.value);
    var ghostWord=document.getElementById("ghostWord");
    // alert(ghostWord.value);
    localStorage.setItem("ghostWord",ghostWord.value);



    //检测浏览器是否支持
    if(typeof(Storage) !== "undefined"){
    	//先将数组转换成JSON对象再
    	localStorage.setItem("lastname", JSON.stringify(array));//存入数组
    	localStorage.setItem("playerNum",playerNum.value);//总玩家



    }else{
    	alert("抱歉你的浏览器不支持")
    }



    if(shuimingWord.value.length==0){
    	alert("请输入水民词组")
    }else{
    	if(ghostWord.value.length==0){
    	alert("请输入幽灵词组");

    }else{
    	if(shuimingWord.value==ghostWord.value){
    		alert("水民词组和幽灵词组不能相同")

    	}else{
    		window.location.href="fanpai.html";
    	}

    }

    }



	//跳转


}
var change =true;
var NO=0;
function next(){
	// var array=JSON.parse(localStorage.getltem("key"))
	var array=JSON.parse(localStorage.getItem("lastname"));
	var playerNum=localStorage.getItem("playerNum");
	var shuimingWord=localStorage.getItem("shuimingWord");
	var ghostWord=localStorage.getItem("ghostWord");
	if(NO<playerNum){


	//这个函数里面没有调用到数组array[]的值
	//待解决   数组乱序和函数调用都没有问题  大约是作用域？
	//？？？？？？
	if(!change){
		kuangOne.style.display="flex";
		kuangTwo.style.display="none";
		var numbers=document.getElementById("numbers1");
		numbers.innerHTML=(NO+1);
		var bottomText=document.getElementById("watch");
		bottomText.innerHTML="查看"+(NO+1)+"号身份";





	}else{
		kuangTwo.style.display="flex";
		kuangone.style.display="none";
		var numbers=document.getElementById("numbers2");
		numbers.innerHTML=(NO+1);
		var role=document.getElementById("role");
		var word=document.getElementById("word");

		role.innerHTML="角色:"+array[NO];//这里没问题
		if(array[NO]=="水民"){
			word.innerHTML="词组是:"+shuimingWord;

		}else{
			word.innerHTML="词组是:"+ghostWord;
		}



		NO++;

	}
	change=!change;
	if(NO<playerNum){

		var bottomText=document.getElementById("watch");
		if(change){bottomText.innerHTML="查看"+(NO+1)+"号身份";}
		else{
			bottomText.innerHTML="隐藏并传递给"+(NO+1)+"号";
		}

	}else{
		var bottomText=document.getElementById("watch");
		bottomText.innerHTML="法官查看";

	}



}else{

	window.location.href="faguan.html";
}



}
var playerNum1=localStorage.getItem("playerNum");

for(var num=0;num<playerNum1;num++){
	var gezhi=document.getElementsByTagName("article");
		gezhi[num].style.display="flex";
	var array=JSON.parse(localStorage.getItem("lastname"));
	var juese= document.getElementsByClassName("p1");
		juese[num].innerHTML=array[num];
	var gezhi1=document.getElementsByClassName("p2");
		gezhi1[num].innerHTML=num+1+"号"




}
function link2(){
	window.location.href="journal.html";
}





