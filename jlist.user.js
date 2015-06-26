// ==UserScript==
// @name        Jlist
// @namespace   https://yuki-yukimax.rhcloud.com
// @description 抓图
// @match       http://www.jlist.com/product/*
// @require     http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// @updateURL   https://github.com/nagatoyk/gm_script/raw/master/jlist.user.js
// @downloadURL https://github.com/nagatoyk/gm_script/raw/master/jlist.user.js
// @version     1.1.6
// @grant       none
// ==/UserScript==

var jQ172 = $.noConflict(true);
(function($) {
	console.log($.fn.jquery);
	baseImg = $('.base-image img').attr('src');
	fancyList = $('#productgallery >.fancy');
	console.log(baseImg);
	console.log(fancyList);
	list = {};
	$('#productgallery .fancy').each(function(i, e) {
		console.log(i, e);
		list[i] = {title: e.title, link: e.href};
	});
	m = [{'title': document.title, 'base': baseImg, 'list': list}];
	console.log(m);
}) (jQ172);