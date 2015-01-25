module.exports = function(grunt) {

// 1. All configuration goes here
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'style.css': 'sass/style.scss'
      }
    }
  },

  autoprefixer: {
    options: {
      map: true
    },
    global: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 9']
      },
      src: 'style.css'
    },
  },

  svgmin: {
    options: {
      plugins: [
        { removeViewBox: false },
        { removeUselessStrokeAndFill: false }
      ]
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'images/icons/src/',
        src: [ '*.svg' ],
        dest: 'images/icons/.tmp',
        ext: '.svg'
      }]
    }
  },

  svgstore: {
    defaults: {
      options: {
        prefix: 'icon-',
        svg: {
          viewBox: '0 0 20 20',
          class: 'icon-bundle'
        }
      },
      files: {
        'images/icons/icons.svg': [ 'images/icons/.tmp/*.svg' ]
      },
    }
  },

  watch: {
    css: {
      files: [ 'sass/**/*.scss' ],
      tasks: [ 'sass', 'autoprefixer' ],
      options: {
        spawn: false
      }
    },
    svg: {
      files: [ 'images/icons/*.svg' ],
      tasks: [ 'svgmin', 'svgstore' ],
      options: {
        spawn: false
      }
    }
  }
});

// 3. Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-watch');      // watch files for changes
grunt.loadNpmTasks('grunt-contrib-sass');       // Gettin Sassy!
grunt.loadNpmTasks('grunt-autoprefixer');       // Auto-freaking-prefixer!!!
grunt.loadNpmTasks( 'grunt-svgmin' );           // SVG minifier
grunt.loadNpmTasks('grunt-svgstore');           // SVG combiner

// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['watch']);

};
