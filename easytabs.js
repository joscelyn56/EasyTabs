/*! 
* EasyTabs easytabs.js https://github.com/joscelyn56/EasyTabs
* Version - 0.0.1
* Licensed under the MIT license - http://opensource.org/licenses/MIT
*
* Copyright (c) 2018 Okwu Joscelyn Kinikachi
*/

'use strict';

var easytabs = (function() {

	// Check if the number of tabs is greater than 5
	if($('.easytab-links > ul > li').length > 5){

		//Check if the screen is a mobile screen.
		if($(window).width() <= 650){

			//If the screen is mobile, display tabs in block format, stacked on top each other.
			$('.easytab-links > ul').css('display','block');

			//Change the down arrows to up facing arrows
			$('.easytab-links > ul > li > .arrow-down').removeClass('arrow-down').addClass('arrow-up');
			$('.easytab-links > ul > li').css('border-bottom', '1px solid #efefef');

		}else{

			// if the screen is a large screen, display down facing arrows
			$('.easytab-links > ul > li > .arrow-down').removeClass('arrow-down').addClass('arrow-up');

			//Display tabs in linear format
			$('.easytab-links > ul').css('display','inline-flex');
			$('.easytab-links > ul > li').css('padding','30px 10px');
			$('.easytab-links > ul > li').css('font-size','11px');

		}
	}
		
	//if a tab is clicked
	$('.easytab-links > ul > li').on('click', function(){
		//check if the tab is active, if yes do nothing.
		if(!$(this).hasClass('active')){

			//if its not active, deactivate current active tab
			$('.easytab-links > ul > li.active').removeClass('active');

			//Make clicked tab active
			$(this).removeClass('active').addClass('active');
			var id = $(this).attr('data-id');

			//Hide all active tab panel not associated with current active tabs
			$('.easytab-panel > .active').removeClass('active');

			//show the panel for the active tab.
			$('#'+id).addClass('active');

		}
	});

	//if a tab is clicked
	$('.easytab-side-links > ul > li').on('click', function(){
		//check if the tab is active, if yes do nothing.
		if(!$(this).hasClass('active')){

			//if its not active, deactivate current active tab
			$('.easytab-side-links > ul > li.active').removeClass('active');

			//Make clicked tab active
			$(this).removeClass('active').addClass('active');
			var id = $(this).attr('data-id');

			//Hide all active tab panel not associated with current active tabs
			$('.easytab-side-panel > .active').removeClass('active');

			//show the panel for the active tab.
			$('#'+id).addClass('active');

		}
	});

})();
