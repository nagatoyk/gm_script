// ==UserScript==
// @name        konachan
// @namespace   https://yuki-yukimax.rhcloud.com
// @description 抓图
// @match       http://konachan.com/*
// @require     http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// @updateURL   https://github.com/nagatoyk/gm_script/raw/master/konachan.user.js
// @downloadURL https://github.com/nagatoyk/gm_script/raw/master/konachan.user.js
// @version     1.0.2
// @grant       none
// ==/UserScript==
var jQ172 = $.noConflict(true);
(function($) {
	console.log($.fn.jquery);
	switch (location.pathname.substring(1, 10)) {
		case 'post':
			console.log(location);
			$('li .thumb').each(function() {
				console.log($(this));
				$(this).attr('href', '/post/show/' + ($(this).attr('href')).match('\\d{1,}')[0]);
				$(this).attr('target', '_konachan');
			});
			break;
		case 'post/show':
			pid = location.pathname.match('\\d{1,}')[0];
			source = location.href.match('http\:\/\/konachan\.com\/post\/show\/\\d{1,}')[0];
			imgurl = $('#highres').attr('href');
			console.log(pid, source, imgurl);
			$.post('http://yukimax.sinaapp.com/p/saveImg.php?pid=' + pid, {imgOpt:{url:imgurl,source:source}}, function(r) {
				if (!r.id || r.pid == 0 || r.error) {
					$.post('http://yukimax.sinaapp.com/p/saveImg.php?pid=' + pid, {imgOpt:{url:imgurl,source:source}}, function(r) {
						console.log(r);
						if (r.original_pic) {
							location.href = r.original_pic;
						}
					}, 'json');
				} else {
					console.log(r);
					if (r.original_pic) {
						location.href = r.original_pic;
						// alert(r.original_pic);
					}
				}
			}, 'json');
			break;
	}
}) (jQ172);