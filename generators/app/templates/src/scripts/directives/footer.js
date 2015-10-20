define(['controllers/footer', 'text!../../templates/footer.html'], function(controller, template) {
	'use strict';

	function footerDirective() {
		return {
			restrict: 'A',
			controller: controller,
			template: template
		};
	}
	return footerDirective;
});