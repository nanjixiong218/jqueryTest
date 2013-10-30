$(function(){
	
	$("tbody tr:even").css("background-color","green");//改变偶数行的颜色
	var td = $("tbody td:even");
	
	
	td.click(function(){
		
		
		var tdobj = $(this);
		if(tdobj.children("input").length>0) 
		{
			return false;
		}
		var textinput = $("<input type='text'/>");
		var text = tdobj.html();
	
		textinput.blur(function(){
		tdobj.html(text);
		});//失去焦点的时候触发
		tdobj.html("");
		textinput.val(text)
		.width(tdobj.width())
		.height("100%")
		.css("font-size",tdobj.css("font-size"))
		.css("border","0")
		.css("background-color",tdobj.css("background-color"))
		
		.appendTo(tdobj)

		.trigger("focus").trigger("select")//先插入再选中才有效
		;
		
		textinput.keyup(function(e){
			if(e.which==13)//按回车
			{
				tdobj.html($(this).val());
			}
			if(e.which==27)//按esc
			{
				tdobj.html(text);
			}
		})
		
	})
	
	
	
	
})
