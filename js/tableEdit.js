$(function(){
	
	$("tbody tr:even").css("background-color","green");//�ı�ż���е���ɫ
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
		});//ʧȥ�����ʱ�򴥷�
		tdobj.html("");
		textinput.val(text)
		.width(tdobj.width())
		.height("100%")
		.css("font-size",tdobj.css("font-size"))
		.css("border","0")
		.css("background-color",tdobj.css("background-color"))
		
		.appendTo(tdobj)

		.trigger("focus").trigger("select")//�Ȳ�����ѡ�в���Ч
		;
		
		textinput.keyup(function(e){
			if(e.which==13)//���س�
			{
				tdobj.html($(this).val());
			}
			if(e.which==27)//��esc
			{
				tdobj.html(text);
			}
		})
		
	})
	
	
	
	
})
