'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		angular: '../lib/angular.min',
		angularrouter: '../lib/angular-route.min',
		jquery: '../lib/jquery.min',
		bootstrap: '../lib/bootstrap.min'
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