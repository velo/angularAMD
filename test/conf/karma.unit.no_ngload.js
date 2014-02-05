// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
/*jslint node: true */

module.exports = function(config) {
	config.set( {
		// base path, note that this is expected to be ran under build directory
		basePath : '../..',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks : [ 'jasmine', 'requirejs' ],

		// list of files / patterns to load in the browser
		files : [ {
			pattern : 'dependencies/angular/*.js',
			watched : false,
			included : false
		}, {
			pattern : 'dependencies/angularAMD/*.js',
			watched : false,
			included : false
		}, {
			pattern : 'test/unit/app_no_ngload.spec.js',
			watched : true,
			included : false
		}, {
			pattern : 'test/unit/lib/app_no_ngload.js',
			watched : true,
			included : false
		}, 'dependencies/requirejs/require.js', 'test/unit/lib/main.no_ngload.js' ],

		
		// files: ['test/conf/testSpec.js'],

		// list of files / patterns to exclude
		exclude : [],

		// web server port
		port : 9898,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO ||
		// LOG_DEBUG
		logLevel : config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file
		// changes
		autoWatch : true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers : [ 'PhantomJS' ],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun : true,

		reporters : [ 'progress', 'coverage' ],

		preprocessors : {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'**/*.js' : [ 'coverage' ]
		},

		// optionally, configure the reporter
		coverageReporter : {
			type : 'html',
			dir : 'coverage/'
		}
	} );
};
