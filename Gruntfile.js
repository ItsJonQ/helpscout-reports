module.exports = function(grunt) { 'use strict';

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  var config = {
    app: 'app',
    assetsDir: '{{site.theme.link}}/',
    dist: 'public',
    liveReload: 42526,
    port: 80,
    ghPages: '_site',
    rsyncHost: 'root@162.243.32.19',
    src: 'src',
    temp: '.tmp',
    theme: 'tneme-name',
    url: 'url.dev',
  };

  grunt.initConfig({

    config: config,

    'gh-pages': {
      options: {
        base: '<%= config.ghPages %>'
      },
      src: '**/*'
    },

    rsync: {
      options: {
        args: ['--verbose'],
        exclude: [
        '.git*',
        '*.scss',
        'node_modules',
        '.sass-cache',
        'app',
        'bower_components',
        'dist',
        'src',
        '.DS_Store',
        '.jshintrc',
        '.gitignore',
        'bower.json',
        'README.md',
        'package.json',
        '.tmp',
        'vendor'
        ],
        recursive: true
      },
      production: {
        options: {
          src: './_site/',
          dest: '../var/www/html/hs',
          host: '<%= config.rsyncHost %>',
          delete: true
        }
      }
    }
  });

  grunt.registerTask('deploy', [
    'gh-pages'
  ]);
};