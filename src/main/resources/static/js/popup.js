// This provide the popup page instead of window.

var popup={
	tipclass: 'popup',
	fadeeffect: [true, 500],
	anchors: [],
	tooltips: [], //array to contain references to all tooltip DIVs on the page
	current: '',

	positiontip:function($, tipindex, e){
		var anchor=this.anchors[tipindex]
		var tooltip=this.tooltips[tipindex]
		var scrollLeft=window.pageXOffset? window.pageXOffset : this.iebody.scrollLeft
		var scrollTop=window.pageYOffset? window.pageYOffset : this.iebody.scrollTop
		var docwidth=(window.innerWidth)? window.innerWidth-15 : popup.iebody.clientWidth-15
		var docheight=(window.innerHeight)? window.innerHeight-18 : popup.iebody.clientHeight-15
		var tipx=anchor.dimensions.offsetx+26
		var tipy=anchor.dimensions.offsety+anchor.dimensions.h-10
		tipx=(tipx+tooltip.dimensions.w-scrollLeft>docwidth)? tipx-tooltip.dimensions.w : tipx //account for right edge
		tipy=(tipy+tooltip.dimensions.h-scrollTop>docheight)? tipy-tooltip.dimensions.h-anchor.dimensions.h : tipy //account for bottom edge
		$(tooltip).css({left: tipx, top: tipy})
	},

	showtip:function($, tipindex, e){
		var tooltip=this.tooltips[tipindex]
		if (this.fadeeffect[0])
			$(tooltip).hide().fadeIn(this.fadeeffect[1])
		else
			$(tooltip).show()
	},

	hidetip:function($, tipindex, e){
		var tooltip=this.tooltips[tipindex]
		if (this.fadeeffect[0])
			$(tooltip).fadeOut(this.fadeeffect[1])
		else
			$(tooltip).hide()	
	},

	updateanchordimensions:function($){
		var $anchors=$('*[@rel="'+popup.tipclass+'"]')
		$anchors.each(function(index){
			this.dimensions={w:this.offsetWidth, h:this.offsetHeight, offsetx:$(this).offset().left, offsety:$(this).offset().top}
		})
	},

	render:function(){
		jQuery(document).ready(function($){
			popup.iebody=(document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
			var $anchors=$('*[@rel="'+popup.tipclass+'"]')
			var $tooltips=$('div[@class="'+popup.tipclass+'"]')
			$anchors.each(function(index){ //find all links with "title=popup" declaration
				this.dimensions={w:this.offsetWidth, h:this.offsetHeight, offsetx:$(this).offset().left, offsety:$(this).offset().top} //store anchor dimensions
				this.tippos=index+' pos' //store index of corresponding tooltip
				var tooltip=$tooltips.eq(index).get(0) //ref corresponding tooltip
				if (tooltip==null) //if no corresponding tooltip found
					return //exist
				tooltip.dimensions={w:tooltip.offsetWidth, h:tooltip.offsetHeight}
				$(tooltip).remove().appendTo('body') //add tooltip to end of BODY for easier positioning
				popup.tooltips.push(tooltip) //store reference to each tooltip
				popup.anchors.push(this) //store reference to each anchor
				var $anchor=$(this)
				$anchor.click(
					function(e){ //onMouseover element
						current = parseInt(this.tippos)
						popup.positiontip($, parseInt(this.tippos), e)
						popup.showtip($, parseInt(this.tippos), e)
					},
					function(e){ //onMouseout element
						popup.hidetip($, parseInt(this.tippos), e)
					}
				)
				$('.closeButton').click(function(e){
						popup.hidetip($, current, e)
						return false;
					});
				$(window).bind("resize", function(){popup.updateanchordimensions($)})
			})
		})
	}
}

popup.render()
