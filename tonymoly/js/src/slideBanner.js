// slideBanner.js

$(function() {

	var addBanner = $('.add_banner'),
			bannerAll = $('.bannerAll'),
			timed     = 500;

	addBanner.find('.lt').on('click',function() {
		bannerAll.stop().animate({marginLeft:0}, 500, function(){
			bannerAll.find('li:last').prependTo(bannerAll);
			bannerAll.css({marginLeft:-100+'%'});
		});
	});
	addBanner.find('.gt').on('click',function() {
		bannerAll.animate({marginLeft:-200+'%'}, 500,function(){
			bannerAll.find('li:first').appendTo(bannerAll);
			bannerAll.css({marginLeft:-100+'%'});
			});
	});


});