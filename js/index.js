$(document).ready(function(){
	"use strict";
	$("#index_box ul li a").click(function(){
		$(this).next().stop().animate({
    		height:'toggle'
  		});
	});//标签点击滑动
	
	$("#index_box li>a").click(function(){
		$("#index_box li>a").removeClass("fontChose");
		$(this).addClass("fontChose");//选中b标签文字颜色改变
	});
});
