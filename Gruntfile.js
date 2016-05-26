/*!
 *  Gruntfile
 */

module.exports = function( grunt ) {
	'use strict';

	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	// Project Configuration
	grunt.initConfig({

		//Metadata
		pkg: grunt.file.readJSON( 'package.json' ),

		//Setting folder templates
		dirs: {
			demo: 'src/plugins/<%= pkg.name %>-demo',
			extensions: 'src/plugins/<%= pkg.name %>-extensions',
			theme: 'src/themes/<%= pkg.name %>',
			childTheme: 'src/themes/<%= pkg.name %>-child',
			themeJS: 'src/themes/<%= pkg.name %>/assets/js',
			themeCSS: 'src/themes/<%= pkg.name %>/assets/css',
			themeSASS: 'src/themes/<%= pkg.name %>/assets/sass',
			html: 'HTML',
			htmlCSS: 'HTML/assets/css',
			htmlSASS: 'HTML/assets/sass'
		},

		// JavaScript linting with JSHint.
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= dirs.themeJS %>/*.js',
				'!<%= dirs.themeJS %>/*.min.js'
			]
		},

		// Minify .js files.
		uglify: {
			options: {
				preserveComments: 'some'
			},
			main: {
				files: [{
					expand: true,
					cwd: '<%= dirs.themeJS %>',
					src: [
						'*.js',
						'!*.min.js'
					],
					dest: '<%= dirs.themeJS %>',
					ext: '.min.js'
				}]
			}
		},

		// Minify .css files.
		cssmin: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= dirs.themeCSS %>/',
					src: [
						'*.css',
						'!*.min.css'
					],
					dest: '<%= dirs.themeCSS %>/',
					ext: '.min.css'
				}]
			},
			htmlmain: {
				files: [{
					expand: true,
					cwd: '<%= dirs.htmlCSS %>/',
					src: [
						'*.css',
						'!*.min.css'
					],
					dest: '<%= dirs.htmlCSS %>/',
					ext: '.min.css'
				}]
			},
			colors: {
				files: [{
					expand: true,
					cwd: '<%= dirs.themeCSS %>/colors/',
					src: [
						'*.css',
						'!*.min.css'
					],
					dest: '<%= dirs.themeCSS %>/colors/',
					ext: '.min.css'
				}]
			},
			theme: {
				files: [{
					expand: true,
					cwd: '<%= dirs.theme %>/',
					src: ['style.css','rtl.css'],
					dest: '<%= dirs.theme %>/',
					ext: '.min.css'
				}]
			}
		},

		// Compile all .scss files.
		sass: {
			dist: {
				options: {
					require: 'susy',
					sourcemap: 'none',
					includePaths: require( 'node-bourbon' ).includePaths
				},
				files: [{
					'<%= dirs.theme %>/style.css': '<%= dirs.themeSASS %>/style.scss',
					'<%= dirs.theme %>/rtl.css': '<%= dirs.themeSASS %>/rtl.scss',
					'<%= dirs.htmlCSS %>/style.css': '<%= dirs.htmlSASS %>/style.scss',
					'<%= dirs.htmlCSS %>/rtl.css': '<%= dirs.htmlSASS %>/rtl.scss',
					'<%= dirs.htmlCSS %>/colors/blue.css': '<%= dirs.htmlSASS %>/colors/blue.scss',
					'<%= dirs.htmlCSS %>/colors/flat-blue.css': '<%= dirs.htmlSASS %>/colors/flat-blue.scss',
					'<%= dirs.htmlCSS %>/colors/gold.css': '<%= dirs.htmlSASS %>/colors/gold.scss',
					'<%= dirs.htmlCSS %>/colors/green.css': '<%= dirs.htmlSASS %>/colors/green.scss',
					'<%= dirs.htmlCSS %>/colors/orange.css': '<%= dirs.htmlSASS %>/colors/orange.scss',
					'<%= dirs.htmlCSS %>/colors/red.css': '<%= dirs.htmlSASS %>/colors/red.scss',
					'<%= dirs.htmlCSS %>/colors/yellow.css': '<%= dirs.htmlSASS %>/colors/yellow.scss',
					'<%= dirs.htmlCSS %>/colors/pink.css': '<%= dirs.htmlSASS %>/colors/pink.scss',
					'<%= dirs.htmlCSS %>/colors/black.css': '<%= dirs.htmlSASS %>/colors/black.scss',
					'<%= dirs.htmlCSS %>/admin/electro-admin.css': '<%= dirs.htmlSASS %>/admin/admin.scss',

					'<%= dirs.themeCSS %>/colors/blue.css': '<%= dirs.themeSASS %>/colors/blue.scss',
					'<%= dirs.themeCSS %>/colors/flat-blue.css': '<%= dirs.themeSASS %>/colors/flat-blue.scss',
					'<%= dirs.themeCSS %>/colors/gold.css': '<%= dirs.themeSASS %>/colors/gold.scss',
					'<%= dirs.themeCSS %>/colors/green.css': '<%= dirs.themeSASS %>/colors/green.scss',
					'<%= dirs.themeCSS %>/colors/orange.css': '<%= dirs.themeSASS %>/colors/orange.scss',
					'<%= dirs.themeCSS %>/colors/red.css': '<%= dirs.themeSASS %>/colors/red.scss',
					'<%= dirs.themeCSS %>/colors/yellow.css': '<%= dirs.themeSASS %>/colors/yellow.scss',
					'<%= dirs.themeCSS %>/colors/pink.css': '<%= dirs.themeSASS %>/colors/pink.scss',
					'<%= dirs.themeCSS %>/colors/black.css': '<%= dirs.themeSASS %>/colors/black.scss',
					'<%= dirs.themeCSS %>/admin/electro-admin.css': '<%= dirs.themeSASS %>/admin/admin.scss',
				}]
			}
		},

		// Watch changes for assets.
		watch: {
			css: {
				files: [
					'<%= dirs.themeSASS %>/*.scss'
				],
				tasks: [
					'sass',
					'css'
				]
			},
			js: {
				files: [
					// main js
					'<%= dirs.themeJS %>/*js',
					'!<%= dirs.themeJS %>/*.min.js'
				],
				tasks: ['uglify']
			}
		},

		// Check textdomain errors.
		checktextdomain: {
			options:{
				text_domain: '<%= pkg.name %>',
				keywords: [
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'esc_html__:1,2d',
					'esc_html_e:1,2d',
					'esc_html_x:1,2c,3d',
					'esc_attr__:1,2d',
					'esc_attr_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d'
				]
			},
			theme: {
				src:  [
					'<%= dirs.theme %>/**/*.php', // Include all files
					'!node_modules/**' // Exclude node_modules/
				],
				expand: true
			},
			plugin: {
				options: {
					text_domain: '<%= pkg.name %>-extensions'
				},
				src: [
					'<%= dirs.extensions %>/**/*.php',
					'!node_modules/**' // Exclude node_modules/
				],
				expand: true
			}
		},

		// Generate POT files.
		makepot: {
			options: {
				potHeaders: {
					'report-msgid-bugs-to': 'http://transvelo.freshdesk.com/',
					'language-team': '<%= pkg.title %> POT <support@transvelo.com>'
				}
			},
			frontend: {
				options: {
					type: 'wp-theme',
					cwd: '<%= dirs.theme %>/',
					domainPath: 'languages',
					potFilename: '<%= pkg.name %>.pot',
					processPot: function ( pot ) {
						pot.headers['project-id-version'];
						return pot;
					}
				}
			},
			plugins: {
				options: {
					type: 'wp-plugin',
					cwd: '<%= dirs.extensions %>/',
					domainPath: 'languages',
					potFilename: '<%= pkg.name %>-extension.pot',
					processPot: function ( pot ) {
						pot.headers['project-id-version'];
						return pot;
					}
				}
			}
		},

		version: {
			extension_plugin: {
				options: {
					prefix: 'Version:\\s*\\s'
				},
				src: [ '<%= dirs.extensions %>/<%= pkg.name %>-extensions.php' ]
			},
			demo_plugin: {
				options: {
					prefix: 'Version:\\s*\\s'
				},
				src: [ '<%= dirs.demo %>/<%= pkg.name %>-demo.php' ]
			},
			theme_sass: {
				options: {
					prefix: 'Version:\\s*\\s'
				},
				src: [
					'<%= dirs.themeSASS %>/style.scss',
					'<%= dirs.themeSASS %>/rtl.scss'
				]
			},
			child_theme: {
				options: {
					prefix: 'Version:\\s*\\s'
				},
				src: [ '<%= dirs.childTheme %>/style.css' ]
			}
		},

		// Clean previous deployed files
		clean: {
			dist: [
				'<%= pkg.name %>*.zip'
			],
			files: '.grunt'
		},

		// make a zipfile
		compress: {
			demo_plugin: {
				options: {
					archive: '<%= pkg.name %>-demo.zip'
				},
				files: [ {
					expand: true,
					cwd: '<%= dirs.demo %>',
					dest: '<%= pkg.name %>-demo',
					src: [
						'**',
						'!.*',
						'!.*/**',
						'.htaccess',
						'!Gruntfile.js',
						'!README.md',
						'!package.json',
						'!node_modules/**',
						'!.DS_Store',
						'!npm-debug.log'
					]
				} ],
			},
			extension_plugin: {
				options: {
					archive: '<%= pkg.name %>-extensions.zip'
				},
				files: [ {
					expand: true,
					cwd: '<%= dirs.extensions %>',
					dest: '<%= pkg.name %>-extensions',
					src: [
						'**',
						'!.*',
						'!.*/**',
						'.htaccess',
						'!Gruntfile.js',
						'!README.md',
						'!package.json',
						'!node_modules/**',
						'!.DS_Store',
						'!npm-debug.log'
					]
				} ],
			},
			main: {
				options: {
					archive: '<%= pkg.name %>.zip'
				},
				files: [ {
					expand: true,
					cwd: '<%= dirs.theme %>',
					dest: '<%= pkg.name %>',
					src: [
						'**',
						'!.*',
						'!.*/**',
						'.htaccess',
						'!Gruntfile.js',
						'!README.md',
						'!package.json',
						'!node_modules/**',
						'!.DS_Store',
						'!npm-debug.log'
					]
				} ],
			},
			child: {
				options: {
					archive: '<%= pkg.name %>-child.zip'
				},
				files: [ {
					expand: true,
					cwd: '<%= dirs.childTheme %>',
					dest: '<%= pkg.name %>-child',
					src: [
						'**',
						'!.*',
						'!.*/**',
						'.htaccess',
						'!Gruntfile.js',
						'!README.md',
						'!package.json',
						'!node_modules/**',
						'!.DS_Store',
						'!npm-debug.log'
					]
				} ],
			},
			build: {
				options: {
					archive: '<%= pkg.name %>-v<%= pkg.version %>.zip'
				},
				files: [ {
					expand: true,
					cwd: 'dist/',
					dest: '<%= pkg.name %>-v<%= pkg.version %>',
					src: [
						'**',
						'!.*',
						'!.*/**',
						'.htaccess',
						'!Gruntfile.js',
						'!README.md',
						'!package.json',
						'!node_modules/**',
						'!.DS_Store',
						'!npm-debug.log'
					]
				} ],
			}
		},

		// Creates deploy-able theme
		copy: {
			main: {
				files: [
					{ src: ['<%= pkg.name %>-extensions.zip'], dest: '<%= dirs.theme %>/assets/plugins/'}
				]
			},
			deploy: {
				files: [
					{ src: ['<%= pkg.name %>.zip'], dest: 'dist/theme-files/'},
					{ src: ['<%= pkg.name %>-child.zip'], dest: 'dist/theme-files/'},
				]
			},
			changelog: {
				files: [
					{ expand: true, cwd: 'dist/', src: ['changelog.txt'], dest: 'gh-pages/'}
				]
			}
		},

		'gh-pages': {
			pages: {
				options: {
					base : 'gh-pages'
				},
				src: ['**']
			},
			theme: {
				options: {
					base : '<%= dirs.theme %>',
					branch: 'theme',
				},
				src: ['**']
			}
		}

	});

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-checktextdomain' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	// Register tasks
	grunt.registerTask( 'default', [
		'css',
		'uglify'
	]);

	grunt.registerTask( 'css', [
		'sass',
		'cssmin'
	]);

	grunt.registerTask( 'dev', [
		'default',
		'checktextdomain',
		'makepot'
	]);

	grunt.registerTask( 'deploy', [
		'clean:dist', 'compress:demo_plugin', 'compress:extension_plugin', 'copy:main', 'compress:main', 'compress:child', 'copy:deploy', 'copy:changelog'
	]);

	grunt.registerTask( 'publish', [
		'gh-pages:pages',
		'clean:files'
	]);

	grunt.registerTask( 'publishtheme', [
		'gh-pages:theme',
		'clean:files'
	]);

	grunt.registerTask( 'build', [
		'deploy',
		'compress:build'
	]);

};
