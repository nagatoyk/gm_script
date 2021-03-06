// ==UserScript==
// @name        土豆
// @namespace   https://yuki-yukimax.rhcloud.com
// @description 把烦人的土豆侧栏关掉
// @match       http://*.tudou.com/*
// @require     http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// @updateURL   https://github.com/nagatoyk/gm_script/raw/master/tudou.user.js
// @downloadURL https://github.com/nagatoyk/gm_script/raw/master/tudou.user.js
// @version     1.0.3
// @author      小熊
// @grant       none
// ==/UserScript==
var jQ172 = $.noConflict(true);
(function($) {
	switch (location.hostname) {
		case 'cartoon.tudou.com':
			if (!$('body').attr('class')) {
				$('body').addClass('g-sidebar-hide').addClass('w1216');
			}
			console.log(location.hostname);
			break;
		case 'www.tudou.com':
			if (location.pathname.match('albumplay|listplay|programs')) {
				$(document).scrollTop($('#player').offset().top - $('#gTop').height());
			}
			console.log(location.hostname, location.pathname.substring(1, 9), $('#player').offset().top);
			break;
	}
}) (jQ172);