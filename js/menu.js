$(function(){
	
	$(".main>a").click(function(){
		
		var ul=$(this).next();
		ul.toggle(1000);
		$(".main ul").not($(this)).toggle(1000);
	})

	$(".hmain>a").click(function(){
		
		$(this).next("ul").slideToggle(3000);
	})
	var timeout = null;//需要在外面定义
	$(".hmain").hover(function(){
	var hLi = $(this);
	timeOut = setTimeout(function(){
	var li = hLi.children("ul");
	li.show(300);
	
	},"1000");
	},function(){
	clearTimeout(timeOut);
	var li = $(this).children("ul");
	li.hide();
	
	})
	

})
