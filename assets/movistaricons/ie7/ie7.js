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
		el.innerHTML = '<span style="font-family: \'movistaricons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ico-circle-currency': '&#xe954;',
		'ico-mo-user': '&#xe955;',
		'ico-secure-2': '&#xe956;',
		'ico-update': '&#xe957;',
		'ico-mo-change': '&#xe958;',
		'ico-windows8': '&#xe951;',
		'ico-offline': '&#xe950;',
		'ico-sort_numeric_asc': '&#xe94c;',
		'ico-sort_numeric_desc': '&#xe94d;',
		'ico-sort_alpha_asc': '&#xe94e;',
		'ico-sort_alpha_desc': '&#xe94f;',
		'ico-download-line': '&#xe924;',
		'ico-add': '&#xe800;',
		'ico-print': '&#xe801;',
		'ico-diagonal-line': '&#xe802;',
		'ico-warning-triangle': '&#xe803;',
		'ico-tag': '&#xe63d;',
		'ico-human': '&#xe63c;',
		'ico-play_left': '&#xe631;',
		'ico-arrow_up2': '&#xe63b;',
		'ico-play_right': '&#xe632;',
		'ico-btn_subtract': '&#xe638;',
		'ico-arrow-circle-left': '&#xe63a;',
		'ico-question_round': '&#xe637;',
		'ico-compartir': '&#xe636;',
		'ico-info-alert': '&#xe61f;',
		'ico-estado-no-disponible': '&#xe612;',
		'ico-estado-disponible': '&#xe611;',
		'ico-carrito': '&#xe633;',
		'ico-invoice': '&#xe634;',
		'ico-pc': '&#xe635;',
		'ico-ppl': '&#xe62f;',
		'ico-house': '&#xe630;',
		'ico-large_arrow_left': '&#xe62e;',
		'ico-arrow_left': '&#xe62d;',
		'ico-thin_down_arrow': '&#xe62c;',
		'ico-arrow_up': '&#xe62b;',
		'ico-arrow_down': '&#xe629;',
		'ico-three_lines': '&#xe62a;',
		'ico-cross': '&#xe628;',
		'ico-copa': '&#xe627;',
		'ico-lupa': '&#xe626;',
		'ico-arrow_right': '&#xe60e;',
		'ico-facturacion': '&#xe622;',
		'ico-otros': '&#xe623;',
		'ico-servicios_digitales': '&#xe624;',
		'ico-telefonia': '&#xe625;',
		'ico-candado': '&#xe621;',
		'ico-rueda_open': '&#xe620;',
		'ico-thin_left_arrow': '&#xe61e;',
		'ico-thin_right_arrow': '&#xe61d;',
		'ico-btn_ticket': '&#xe61c;',
		'ico-btn-arrow_left': '&#xe61a;',
		'ico-btn_plus': '&#xe61b;',
		'ico-f-internet': '&#xe617;',
		'ico-f-telefonia': '&#xe618;',
		'ico-f-television': '&#xe619;',
		'ico-internet-circle': '&#xe616;',
		'ico-ok-tic': '&#xe601;',
		'ico-bg_ico_service': '&#xe600;',
		'ico-feature-android': '&#xe602;',
		'ico-feature-windows': '&#xe603;',
		'ico-feature-apple': '&#xe604;',
		'ico-feature-processor': '&#xe605;',
		'ico-feature-screen': '&#xe606;',
		'ico-feature-sim': '&#xe607;',
		'ico-feature-storage': '&#xe608;',
		'ico-feature-camera': '&#xe609;',
		'ico-big_white_arrow_right': '&#xe60a;',
		'ico-bg-service': '&#xe60b;',
		'ico-wifi': '&#xe60c;',
		'ico-error-input': '&#xe60d;',
		'ico-btn-arrow_right': '&#xe60f;',
		'ico-btn-double-arrow-left': '&#xe639;',
		'ico-btn-double-arrow-right': '&#xe610;',
		'ico-internet': '&#xe613;',
		'ico-internet-tablet': '&#xe614;',
		'ico-movil': '&#xe615;',
		'ico-location-line': '&#xe804;',
		'ico-chat': '&#xe805;',
		'ico-travel-agency': '&#xe806;',
		'ico-like': '&#xe807;',
		'ico-phone-fixed': '&#xe808;',
		'ico-edit': '&#xe809;',
		'ico-calendar': '&#xe900;',
		'ico-calling': '&#xe901;',
		'ico-gift': '&#xe902;',
		'ico-search-doc': '&#xe903;',
		'ico-headset': '&#xe904;',
		'ico-arrow-updown': '&#xe908;',
		'ico-mobile-check': '&#xe909;',
		'ico-mobile-locked': '&#xe90a;',
		'ico-download': '&#xe905;',
		'ico-mobile-contract': '&#xe906;',
		'ico-new': '&#xe907;',
		'ico-truck': '&#xe90b;',
		'ico-truck-lines': '&#xe90c;',
		'ico-withdraw': '&#xe90d;',
		'ico-favorites': '&#xe90e;',
		'ico-warning-triangle-down': '&#xe920;',
		'ico-alert': '&#xe910;',
		'ico-error-input-thin': '&#xe914;',
		'ico-tic': '&#xe919;',
		'ico-location-line-gap': '&#xe918;',
		'ico-mobile-error': '&#xe921;',
		'ico-mobile-repair': '&#xe91f;',
		'ico-mobile-problems': '&#xe917;',
		'ico-traffic': '&#xe91d;',
		'ico-single-document': '&#xe923;',
		'ico-budget': '&#xe91c;',
		'ico-work-orders': '&#xe91a;',
		'ico-read-more': '&#xe90f;',
		'ico-diagnostic': '&#xe913;',
		'ico-order-number': '&#xe91e;',
		'ico-technical-support': '&#xe912;',
		'ico-actions': '&#xe91b;',
		'ico-gear': '&#xe915;',
		'ico-magnifier-border': '&#xe911;',
		'ico-happy-face': '&#xe916;',
		'ico-tool-border': '&#xe922;',
		'ico-shopping-cart': '&#xe925;',
		'ico-clock': '&#xe926;',
		'ico-unlocked': '&#xe927;',
		'ico-sun': '&#xe928;',
		'ico-world-wired': '&#xe929;',
		'ico-alert-cloud': '&#xe92a;',
		'ico-phone-cancelled': '&#xe92b;',
		'ico-phone-waiting': '&#xe92c;',
		'ico-coverage': '&#xe92d;',
		'ico-minus-border': '&#xe92e;',
		'ico-location-arrow': '&#xe92f;',
		'ico-cine': '&#xe930;',
		'ico-email': '&#xe931;',
		'ico-less': '&#xe932;',
		'ico-more': '&#xe933;',
		'ico-music': '&#xe934;',
		'ico-play': '&#xe935;',
		'ico-social': '&#xe936;',
		'ico-web': '&#xe937;',
		'ico-house-locked': '&#xe938;',
		'ico-arrow-top-border': '&#xe939;',
		'ico-arrow-bottom-border': '&#xe93a;',
		'ico-club': '&#xe93b;',
		'ico-check-shield': '&#xe93c;',
		'ico-locked': '&#xe93d;',
		'ico-picture': '&#xe93e;',
		'ico-exit': '&#xe93f;',
		'ico-exit-pad': '&#xe940;',
		'ico-bolsa-compra': '&#xe973;',
		'ico-photo': '&#xe974;',
		'ico-next': '&#xe975;',
		'ico-ico-money': '&#xe976;',
		'ico-ico-mb': '&#xe977;',
		'ico-ico-napster': '&#xe978;',
		'ico-web-exclusive': '&#xe979;',
		'ico-multi-touch': '&#xe97a;',
		'ico-check-cel': '&#xe97b;',
		'ico-battery': '&#xe97c;',
		'ico-screen-size': '&#xe97d;',
		'ico-support': '&#xe97e;',
		'ico-document': '&#xe97f;',
		'ico-mail-attachment': '&#xe952;',
		'ico-streaming-video': '&#xe953;',
		'ico-location': '&#xe63e;',
		'ico-bag-internet': '&#xe980;',
		'ico-reset': '&#xe941;',
		'ico-blind': '&#xe942;',
		'ico-crippled': '&#xe943;',
		'ico-deafness': '&#xe944;',
		'ico-pen': '&#xe945;',
		'ico-mobile-3d': '&#xe946;',
		'ico-mobile-question': '&#xe947;',
		'ico-mobile-arrow-right': '&#xe948;',
		'ico-bag-phone-fix': '&#xe949;',
		'ico-mobile-chart': '&#xe94a;',
		'ico-thin_up_arrow': '&#xe94b;',
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
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());