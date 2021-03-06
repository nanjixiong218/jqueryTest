(function($){
	var windows = $(window);
	var browerwidth; 
	var browerheight; 
	var scrollleft;
	var scrolltop;	
	var cwinwidth;
	var cwinheight;
	var left;
	var top;
	var centerwin;
	var leftwin;
	var rightwin;
	$.fn.extend({
	winPop:function(options){
		var defaults={
			position:'center',
			width:'500',//不能用500px,加上px在进行计算的时候会被当成字符串。
			height:'500'
			};
		var opts =$.extend(defaults,options);
	
		return this.each(function(){
				var theWin = $(this);
				setBaseSize();
				compute(opts);
				theWin.css({width:opts.width,height:opts.height}).css("left",left).css("top",top).show();
				var img_close = theWin.children(".head").children("img");
				img_close.click(function(){
					theWin.hide("3000");
				});
		
			})	
			
		}
	}
	
	)
	function setBaseSize(){
		
		browerwidth = windows.width();
		browerheight = windows.height();
		scrollleft = windows.scrollLeft();
		scrolltop = windows.scrollTop();

	}
	function compute(opts){
		cwinwidth = opts.width;
		cwinheight = opts.height;
		if(opts.position=='center'){
			computecenter(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight);
		}else if(opts.position=='left'){
			computeleft(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight);
		}else if(opts.position=='right'){
			computeright2(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight)
		}
		
	}
	function computecenter(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight){
		left = (browerwidth-cwinwidth)/2+scrollleft;
		top = (browerheight-cwinheight)/2+scrolltop;
	}
	function computeleft(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight){
		left =scrollleft;
		top = (browerheight-cwinheight)+scrolltop;
	}
	function computeright1(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight){
		left =scrollleft+browerwidth-cwinwidth;
		top = browerheight+scrolltop;
	}
	function computeright2(browerwidth,browerheight,scrollleft,scrolltop,cwinwidth,cwinheight){
		left =scrollleft+browerwidth-cwinwidth;
		top = (browerheight-cwinheight)+scrolltop;
	}
	
})(jQuery);
