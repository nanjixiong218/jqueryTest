$(document).ready(function(){
$("#in").select();
if($("#in").val()!="")
{
	$("#in").removeClass("c_in");
}
$("#btn").click(function(){
	
		$("#result").html($("#in").val());
	}
    )
$("#in").keyup(function(){
	if($(this).val()=="")
	{
		$(this).addClass("c_in");
	}
	else
	{
		$(this).removeClass("c_in");;
	}
	
	})
})