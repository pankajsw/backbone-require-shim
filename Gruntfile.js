/* global module:true */
module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        // require js optimization
        // requirejs: {
        //     compile: {
        //         options: {
        //         	 baseUrl: "src/js",
        //              mainConfigFile: "src/js/main.js",
        //              //optimize: "none",
        //              name: "app",
        //              //wrapShim: true,
        //              findNestedDependencies: true,
        //              out: "app-min.js",
        //         }
        //     }
        // },

        jscs: {
			src: [
				"Gruntfile.js",
				"js/collections/**/*.js"
			],
			options: {
				config: ".jscsrc"
			}
		},

		watch: {
			scripts: {
				files: ["Gruntfile.js", "js/collections/*.js"],
				tasks: ["jscs"]
			}
		}
    });
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-jscs-checker");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // define the default (no arg) task to run requirejs and cssmin
    // grunt.registerTask("default", ["requirejs", "jscs"]);
    grunt.registerTask("default", ["jscs"]);

};
