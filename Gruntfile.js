'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			dist: [ 'style.min.css', 'style.css', 'style.scss' ]
		},
		concat: {
			basic: {
				files: {
					'style.scss': [
						'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_clearfix.scss',
						'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid-framework.scss',
						'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid.scss',
						'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
						'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss'
					]
				}
			}
		},
		sass: {
			// options: {
			// 	compass: true,
			// 	style: 'compressed'
			// },
			dist: {
				files: {
					'style.css': 'style.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'style.min.css': 'style.css'
				}
			}
		}
	});

	// Load tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'clean',
		'concat',
		'sass',
		'cssmin'
	]);

};
