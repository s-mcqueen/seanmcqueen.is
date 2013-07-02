module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            prod: {
                options: {
                  file: 'app.js',
                  ignoredFiles: ['README.md', 'node_modules/**'],
                }
            },
        },
        jshint: {
            all: ['*.js'],
        },
        stylus: {
          compile: {
            files: {
              'public/stylesheets/style.css': 'public/stylesheets/style.styl',
            }
          }
        },
        jade: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'views/index.html': 'views/*.jade',
            }
          }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // running tasks
    grunt.registerTask('default', ['jshint', 'stylus', 'jade', 'nodemon']);
    grunt.registerTask('prod', ['jshint', 'stylus', 'jade']);

};
