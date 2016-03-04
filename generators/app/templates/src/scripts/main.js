'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		angular: '../lib/angular',
		angularrouter: '../lib/angular-route',
		jquery: '../lib/jquery',
		bootstrap: '../lib/bootstrap'
	}
});
window.app = {};
require(['angular', 'jquery'], function() {
	require(['angularrouter', 'bootstrap'], function() {
		window.app = angular.module('App', ['ngRoute']);
		require(['router'], function() {
			angular.bootstrap(document, ['App']);
		});
	});
});