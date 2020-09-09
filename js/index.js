//console.log(1)
//获取元素
var li = document.querySelector(".banner li img")
var lis = document.querySelectorAll(".co li ")
//将图片保存到数组中
var arr = ["img/index_img/banner1.jpg", "img/index_img/banner2.jpg"]
var timer = null;
//设置个信号量
var index = 0
//这是自动播放的轮播图
timer = setInterval(carousel, 3000)
//定义轮播图函数
function carousel() {
	index++
	if(index == arr.length) {
		index = 0
	}
	change()
}

function change() {
	li.src = arr[index]
	for(var l of lis) {
		l.classList.remove("on")
	}
	lis[index].classList.add("on")
}
//鼠标移入事件
li.onmouseover= function() {
	clearInterval(timer)
}
//鼠标移出事件
li.onmouseout = function() {
	timer = setInterval(carousel, 3000)
}
//操作底部li来实现切换图片
for(var i = 0; i < lis.length; i++) {
	lis[i].index = i
	lis[i].onclick = function() {
		index = this.index;
		change()
	}
}
//导航栏事件
var dao=document.getElementById("dao")
window.onscroll=function(){
	if(window.pageYOffset>400){
		dao.style.display="block"
	}else{
		dao.style.display="none"
	}
}
//获取li的列表
var lib=document.querySelectorAll(".cont_four>ul>li span")
var divs=document.querySelectorAll(".cont_four>ul>li>div")
for(var i=0;i<lib.length;i++){
	lib[i].index=i
	lib[i].onclick=function(){
		for(var j=0;j<lis.length;j++){
			lib[j].classList.remove("bottom");
			divs[j].classList.remove("bottom1");
		}
		this.classList.add("bottom")
		divs[this.index].classList.add("bottom1")
	}
}
var spans=document.querySelectorAll(".login_con .ding span")
var  xias=document.querySelectorAll(".content>.login_con>.xai")
console.log((xias))
for(var i=0;i<spans.length;i++){
	spans[i].index=i
	spans[i].onclick=function(){
		for(var j=0;j<spans.length;j++){
			spans[j].classList.remove("active");
			xias[j].classList.remove("ative");
		}
		this.classList.add("active")
		xias[this.index].classList.add("ative")
	}
}