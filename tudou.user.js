// ==UserScript==
// @name        土豆
// @namespace   https://yuki-yukimax.rhcloud.com
// @description 把烦人的土豆侧栏关掉
// @match       http://*.tudou.com/*
// @updateURL 	https://github.com/nagatoyk/gm_script/raw/27dc7016c1ee457cc69c7858af623f3a8ca2c219/tudou.user.js
// @downloadURL https://github.com/nagatoyk/gm_script/raw/27dc7016c1ee457cc69c7858af623f3a8ca2c219/tudou.user.js
// @version     0.3
// @author      小熊
// @grant       none
// ==/UserScript==
$(document).ready(function() {
	switch (location.hostname) {
		case 'cartoon.tudou.com':
			if (!$('body').attr('class')) {
				$('body').addClass('g-sidebar-hide').addClass('w1216');
			}
			break;
		case 'www.tudou.com':
			switch (location.pathname.substring(1, 9)) {
				case 'albumpaly':
				case 'listplay':
					console.log(location.pathname.substring(1, 9));
					break;
			}
			break;
	}
});
