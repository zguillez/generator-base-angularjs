# generator-base-angularjs

[![Build Status](https://secure.travis-ci.org/zguillez/generator-base-angularjs.png?branch=master)](https://travis-ci.org/zguillez/generator-base-angularjs) [![Code Climate](https://codeclimate.com/github/zguillez/generator-base-angularjs/badges/gpa.svg)](https://codeclimate.com/github/zguillez/generator-base-angularjs)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for AngularJS webapp development. With RequireJS, Bootstrap, Sass, and templating with Jade.

![](http://zguillez.github.io/img/angularjs.png)

# Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-angularjs from npm, run:

	npm install -g generator-base-angularjs

Finally, initiate the generator:

	yo base-angularjs

If you have error on install try to update dependences manually:

```bash
sudo npm update
```
```bash
bower update
```

## Requeriments

### [NodeJS](https://nodejs.org/)

For update npm

	sudo npm install npm -g

### [Bower](http://bower.io/)

	npm install -g bower

### [Sass](http://sass-lang.com/)

	sudo gem install sass
	
**Documentation:**

* [https://nodejs.org/](https://nodejs.org/)
* [http://bower.io/](http://bower.io/)
* [http://sass-lang.com/](http://sass-lang.com/)

# Usage

Develop code on folder **/src**

	/src
		/data
		/images
		/scripts
			/controllers
			/directives
		/styles
		/templates
		
### Compile code

Use grunt task to compile code and deploy webapp

	grunt serve
	
THis will launch server on port 9000

	http://localhost:9000/
	
Distribute code is compileded on forder **/dist**

	/dist
		/css
		/data
		/images
		/js
		/lib
		/templates
		
## Routing

Put the routes for your app into file **/script/routes.js**.

	define(['controllers', 'directives'], function() {
		'use strict';
		window.app.config(['$routeProvider',
			function($routeProvider) {
				$routeProvider.
				when('/', {
					templateUrl: 'templates/index.html',
					controller: 'indexController'
				}).
				otherwise({
					redirectTo: '/'
				});
			}
		]);
	});

## Controllers

Controllers are loaded by RequireJS. Put all your neededed controllers into file **/scripts/controllers.js**.

	define(['controllers/index'], function(indexController) {
		'use strict';
		window.app.controller('indexController', indexController);
	});

The controllers files should be located into folder **/scripts/controllers/**

	//scripts/controllers/index.js
	
	define([], function() {
		'use strict';
	
		function indexController($scope, $http) {
			$scope.data = {};
			$scope.data.libs = [];
			$http.get('data/data.json').then(function(result) {
				$scope.data.libs = result.data;
			});
		}
		indexController.$inject = ['$scope', '$http'];
		return indexController;
	});

## Directives

Directives are loaded by RequireJS. Put all your neededed directives into file **/scripts/directives.js**.

	define(['directives/header', 'directives/footer'], function(headerDirective, footerDirective) {
		'use strict';
		window.app.directive('ngheader', headerDirective);
		window.app.directive('ngfooter', footerDirective);
	});

The directive files should be located into folder **/scripts/directives/**

	//scripts/directives/header.js
	
	define(['controllers/header', 'text!../../templates/header.html'], function(controller, template) {
		'use strict';
	
		function headerDirective() {
			return {
				restrict: 'A',
				controller: controller,
				template: template
			};
		}
		return headerDirective;
	});

You can use RequireJS Text plugin to load a tempate file for the directive and inject a controller.

### Templating

The NodeJS template engine JADE is implemented. Jade files (\*.jade) must be located on **/templates** folder root.

* Grunt task **jade.js** will process the files into HTML files to folder **/templates/html**.
* Grunt task **copy.js** will copy all CSS files into **/templates/html** to folder **/dist/templates** for ditribution.
* You can also create and edit HTML templates files in **/templates/html**.


You can use combined Jade and Angular directives for templating:

	//templates/index.jade
	
	header('ngheader'='')
	
	section(class='content')
    
    header
        img(class='logo', src='images/angularjs.png')

    .buttons.row
        a('ng-repeat'='lib in data.libs', 'class'='btn btn-default btn-sm', 'href'='{{lib.url}}', 'target'='_black') {{lib.name}}

	footer('ngfooter'='')
	
**Documentation:**

* [http://jade-lang.com/](http://jade-lang.com/)

### Styling

Sass files (\*.sass, \*.scss) must be located on **/src/styles** folder root.

* Grunt task **sass.js** will process the files into CSS files to folder **/src/styles/css**.
* Grunt task **copy.js** will copy all CSS files into **/src/styles/css** to folder **/dist/css** for ditribution.
* You can also create and edit CSS files in **/src/styles/css**.

# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2015 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (October 20, 2015) 
* Initial AngularJS skeleton

Features:

* Bootstrap
* Jquery
* Sass
* Jade templating
* JSHint code chech
* Grunt tasks




