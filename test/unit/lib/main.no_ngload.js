/*jslint browser: true, node: true, nomen: true */

require.config({
    // The baseUrl depends on what is defined in karma.unit.js:basePath
    baseUrl: "/base",
    
    // alias libraries paths
    paths: {
        'angular': 'dependencies/angular/angular',
        'angular-mocks': 'dependencies/angular-mocks/angular-mocks',
        'angularAMD': 'dependencies/angularAMD/angularAMD',
        'ngload': 'dependencies/angularAMD/ngload',
        'app_no_ngload': 'test/unit/lib/app_no_ngload'
    },

    shim: {
        'angularAMD': ['angular']       
    },
    
    // controllerSpec is at the end of dependency tree so kicking it off will start entire test
    deps: ['test/unit/app_no_ngload.spec'],
    
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
