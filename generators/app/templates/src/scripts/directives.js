define(['directives/header', 'directives/footer'], function(headerDirective, footerDirective) {
	'use strict';
	window.app.directive('ngheader', headerDirective);
	window.app.directive('ngfooter', footerDirective);
});