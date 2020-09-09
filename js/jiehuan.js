var flis=document.querySelectorAll(".fenye ul li")
for(var li of flis){
	li.onclick=function(){
	for(var i=0;i<flis.length;i++){
		flis[i].removeAttribute("class")
	}
	this.setAttribute("class","active")
		
	}
}
//获取其他类隐藏dd
var qidds=document.querySelectorAll("#zhan>.anlei dl.qita dd.aa")
//获取其他类的划入元素
var qips=document.querySelectorAll("#zhan>.anlei dl.qita dd.p p")
for(var i=0;i<qips.length;i++){
	qips[i].index=i;
	qips[i].onmouseenter=function(){
		for(var j=0;j<qidds.length;j++){
			qidds[j].classList.remove("active")
		}
		qidds[this.index].classList.add("active")
		
	}
	
}
