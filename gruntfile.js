module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'dist/assets/css/styles-1.0.0.min.css': [
                        'bower_components/bootswatch/paper/bootstrap.css',
                        'bower_components/animate.css/animate.css',
                        'bower_components/font-awesome/css/font-awesome.css',
                        'bower_components/toastr/toastr.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: false
            },
            applib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/firebase/firebase.js',
                    'bower_components/angularfire/dist/angularfire.js',
                    'bower_components/toastr/toastr.js',
                    'js/app.js',
                    'js/config.js',
                    'js/routes.js',
                    'js/home.controller.js',
                    'js/login.controller.js'
                ],
                dest: 'dist/assets/js/scripts-1.0.0.min.js'
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts',
                    src: '**',
                    dest: 'dist/assets/font',
                    flatten: false,
                }],
                files: [{
                    expand: true,
                    cwd: 'dev/assets/images',
                    src: '**',
                    dest: 'dist/assets/images',
                    flatten: false,
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/shared/menu.html': 'dev/shared/menu.html',
                    'dist/pages/home.html': 'dev/pages/home.html',
                    'dist/pages/login.html': 'dev/pages/login.html',
                }
            }
        }
    });

    grunt.registerTask("dist", [
        'cssmin',
        'uglify',
        'copy',
        'htmlmin'
    ]);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};