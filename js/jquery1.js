$(document).ready(function(){
	
	/*메뉴*/
	

	$('.gnbHam').click(function(e){
		e.preventDefault();
		if($('.gnbHam').hasClass('open')==false){
			$('.gnbin').animate({
				left : 0
			},300)
			
			$('.gnbout').css('display','block')
			
			$('.gnbHam').addClass('open')
		} else {
			$('.gnbin').animate({
				left : '-74.2%'
			},300)
			$('.gnbout').css('display','none')
			
			$('.gnbHam').removeClass('open')
		}
	})
	/*메뉴끝*/
	
	/*orderpage/mypage*/
	$('.OMchoice p').click(function(e){
		e.preventDefault();
		var insidecont=$(this).index()
		
		$('.OMchoice p').removeClass('on')
		$('.insidecont > div').removeClass('on')
		
		$(this).addClass('on')
		$('.insidecont > div').eq(insidecont).addClass('on')
	})
	/*orderpage/mypage e */
	
	/*orderlist 메뉴*/
//	
//	$('.ordergnb1deth > li > a').css('height','34px');
//	$('.ordergnb2deth > li > a').css('display','none');
//	$('.ordergnb2deth').css('height','0');
//	
	$('.ordergnb1deth > li:eq(0) > a').click(function(e){
		if($('.ordergnb1deth > li').is(':animated')==false){
		   	e.preventDefault();
			$('.ordergnb1deth > li').animate({
				height : '34px'
			},250)
			$(this).parent().animate({
				height : '124px'
			},500)
		   }
		
		
	})
	$('.ordergnb1deth > li:eq(1) > a').click(function(e){
		if($('.ordergnb1deth > li').is(':animated')==false){
			e.preventDefault();
			$('.ordergnb1deth > li').animate({
				height : '34px'
			},250)
			$(this).parent().animate({
				height : '124px'
			},500)
		}
	})
	$('.ordergnb1deth > li:eq(3) > a').click(function(e){
		if($('.ordergnb1deth > li').is(':animated')==false){
			e.preventDefault();
			$('.ordergnb1deth > li').animate({
				height : '34px'
			},250)
			$(this).parent().animate({
				height : '124px'
			},500)
		}
	})
	
	/*orderlist 메뉴 e*/
	
	
	
	/*검색버튼*/
	$('.searchBtn').click(function(e){
		e.preventDefault();
		if($('.searchBtn').hasClass('srchopen')==false){
			$('.searchbar').css('display','block')
			$('.searchBtn').addClass('srchopen')
		} else {
			$('.searchbar').css('display','none')
			$('.searchBtn').removeClass('srchopen')
		}
	})
	/*검색버튼E*/
	
	
	
	/*top 메뉴*/
	$(window).scroll(function(e){
		e.preventDefault();
		var wscroll=$(this).scrollTop();
//		console.log($(window).height())
		if(wscroll>0){
			$('#top_header').css('position','fixed')
			$('.topbtn').fadeIn(300)
			
		} else { // wscroll=0
			$('#top_header').css('position','inherit')
			$('.topbtn').fadeOut(300)
		}
	})
	
	/*top 메뉴 e*/
	
	/*topbtn*/
	$('.topbtn').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},300)
	})
	/*topbtn e*/

	
	//광고 bxslider
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			slideWidth: 1000,
			minSlides: 1,
			maxSlides: 1,
			speed: 800,
			controls:true
		});
	});
	
	
})