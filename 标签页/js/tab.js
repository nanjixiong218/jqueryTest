$(function(){
	var tab=$("#tabFirst li");
	tab.each(function(index){
	var timeoutid = null;
	$(this).hover(function(){
		var liNode = $(this);
		timeoutid = setTimeout(function(){
		$("div.contentin").removeClass("contentin");
		$("#tabFirst li.tabin").removeClass("tabin");
		$("div").eq(index).addClass("contentin");
		
		liNode.addClass("tabin"); //这个地方不能用$(this)
		

		},"300")
	},function(){
		clearTimeout(timeoutid);	
	});
	
	var rp = $("#replace");
	rp.load("jingtai.html");
	var tab1=$("#tabSecond li");

	tab1.each(function(index){
		$(this).click(function(){
		
		if(index == 0)
			{
			rp.load("jingtai.html");
					
			}
		else if (index == 1)
			{
			rp.load("dongtai.jsp h1");
			}
		else if (index == 2)
			{
			rp.load("dongtai.jsp");	
			}
		$("#tabSecond li.tabin").removeClass("tabin");
		$(this).addClass("tabin");	
			})
		
		})
	
		$("img").bind("ajaxStart",function(){
		$(this).show(3000);
	}).bind("ajaxStop",function(){
		$(this).hide(3000);	
	});
		

	

})
	
})