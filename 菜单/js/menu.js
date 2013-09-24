$(function(){
	
	$(".main>a").click(function(){
		
		var ul=$(this).next();
		ul.toggle(1000);
	})

	$(".hmain>a").click(function(){
		
		$(this).next("ul").slideToggle(3000);
	})
	$(".hmain").hover(function(){
	
	var li = $(this).children("ul");
	li.show(300);
	
	},function(){
	
	var li = $(this).children("ul");
	li.hide();
	
	})
})
