$(function(){
	
	var carnameSelect = $("#main select:first");
	
	var carxinghaoSelect = $(".xinghao").children("select");
	
	var caryangshiSelect = $(".yangshi select");
	
	carnameSelect.change(function(){
		var value = $(this).val();
		if(value=="")
		{
			//如果选择的是空值，隐藏所有其它下来框
			$(".xinghao").hide();
			$(".yangshi").hide();
			$("img").hide();	
		}
		else if(value=="baoma")
		{
			//先清空所有option
			carxinghaoSelect.html("");
			//清空下下级的下拉框和图片
			$(".yangshi").hide();
			$("img").hide();
			$("<option value=''>请选择型号</option>").appendTo(carxinghaoSelect);
			for(var i=1;i<=3;i++)
				{
					$("<option value='baoma"+i+"'>baoma"+i+"</option>").appendTo(carxinghaoSelect);
				}
			$(".xinghao").css("display","inline");
		}
	else if(value=="aodi")
		{
			carxinghaoSelect.html("");
			$(".yangshi").hide();
			$("img").hide();
			$("<option value=''>请选择型号</option>").appendTo(carxinghaoSelect);
			for(var i=1;i<=3;i++)
				{
					$("<option value='aodi"+i+"'>aodi"+i+"</option>").appendTo(carxinghaoSelect);
				}
			$(".xinghao").css("display","inline");
		}
	else if(value=="dazhong")
		{

			carxinghaoSelect.html("");
			$(".yangshi").hide();
			$("img").hide();
			$("<option value=''>请选择型号</option>").appendTo(carxinghaoSelect);
			for(var i=1;i<=3;i++)
				{
					$("<option value='dazhong"+i+"'>dazhong"+i+"</option>").appendTo(carxinghaoSelect);
				}
			$(".xinghao").css("display","inline");
		}
	
	})
	
	carxinghaoSelect.change(function(){
			var value = $(this).val();
		if(value=="")
		{
			//如果选择的是空值，隐藏下级其它下来框
			$(".yangshi").hide();
			
			$("img").hide();	
		}
		else 
		{
			$("img").hide();
			caryangshiSelect.html("");
			
			$("<option value=''>请选择型号</option>").appendTo(caryangshiSelect);
			for(var i=1;i<=3;i++)
				{
					$("<option value='"+value+i+"'>"+value+i+"</option>").appendTo(caryangshiSelect);
				}
			$(".yangshi").css("display","inline");

		}
		
	
	})
	
	caryangshiSelect.change(function(){
	
		var value = $(this).val();
		if(value=="")
		{
			$("img").hide();
		}
		else if(value=="baoma11")
		{

			$("#display").show();
					
			$(".thecar").attr("src","../pictures/2.jpg").show();		
		} 
		else if(value=="baoma12")
		{

			$("#display").show();
		
			$(".thecar").attr("src","../pictures/3.jpg").show();		
		} 
	})

})
