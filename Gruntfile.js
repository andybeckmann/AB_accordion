// -- Grunt Boilerplate

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // -- SASS Compilation

        'dart-sass': {
            target: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        
        // -- CSS Minification

        cssmin: {
            combine: {
                files: {
                    'css/production.css': [
                        'css/main.css',
                    ]
                },
 
                options:{
                    report: 'min'
                }
            }
        },

        // -- Watch

        watch: {
 
            css: {
                files: ['scss/*.scss','scss/**/*.scss','css/**/*.css'],
                tasks: ['dart-sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // -- Plugins

    require('load-grunt-tasks')(grunt);
 
    grunt.registerTask('default', ['dart-sass', 'cssmin', 'watch']);
};