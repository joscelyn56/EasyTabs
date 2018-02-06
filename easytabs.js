var easytabs = (function() {

	$(window).on('load', function(){
		if($('.easytab-links ul li').length > 5){
			if($(window).width() <= 650){
				$('.easytab-links ul').css('display','block');
				$('.easytab-links ul li .arrow-down').removeClass('arrow-down').addClass('arrow-up');
				$('.easytab-links ul li').css('border-bottom', '1px solid #efefef');
			}else{
				$('.easytab-links ul li .arrow-down').removeClass('arrow-down').addClass('arrow-up');
				$('.easytab-links ul').css('display','inline-flex');
				$('.easytab-links ul li').css('padding','30px 10px');
				$('.easytab-links ul li').css('font-size','11px');
			}
		}
	});

	$('.easytab-links ul li').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.easytab-links ul li.active').removeClass('active');
			$(this).removeClass('active').addClass('active');
			var id = $(this).attr('data-id');
			$('.easytab-panel .active').removeClass('active');
			$('#'+id).addClass('active');
		}
	});
})();