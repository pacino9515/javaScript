


	function getRandomColor(){
return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);}



	function click111(){
	// 取出所有小格子
	var one =document.getElementsByClassName("xiaobox");
	var num = one.length;
	// // alert(num);
	// // 从小格子中随机取出三个
	var aaa = parseInt(Math.random()*num);
	// alert(aaa);
	var bbb = parseInt(Math.random()*num);
	while(aaa==bbb){
		bbb=parseInt(Math.random()*num);
	}
	// alert(bbb);
	var ccc = parseInt(Math.random()*num);
	while((aaa==ccc)||(bbb==ccc)){
		ccc=parseInt(Math.random()*num);
	}
	// var example="green"
	var color=getRandomColor();
	one[aaa].style.backgroundColor= color;
	var color=getRandomColor();
	one[bbb].style.backgroundColor= color;
	var color=getRandomColor();
	one[ccc].style.backgroundColor= color;
	for(var i=0; i<num;i++){
		if((i!=aaa)&&(i!=bbb)&&(i!=ccc)){
			one[i].style.backgroundColor="orange"
		}
	}

}

	function repeat(){
		// setInterval("click111()",1000);
		start = setInterval("click111()",1000);
}

	function stop(){

		 clearInterval(start);
	}


