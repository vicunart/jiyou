/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'shareicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		's-qq': '&#xe60a;',
		's-pyq': '&#xe600;',
		's-baidu': '&#xe601;',
		's-douban': '&#xe602;',
		's-kaixin': '&#xe603;',
		's-miliao': '&#xe60b;',
		's-pengyou': '&#xe60c;',
		's-qzone': '&#xe604;',
		's-renren': '&#xe605;',
		's-taobao': '&#xe606;',
		's-txwb': '&#xe607;',
		's-weibo': '&#xe608;',
		's-weixin': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/s-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
