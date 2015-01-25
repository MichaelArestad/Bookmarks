# Bookmarks

I'm a theme designed specifically for bookmarking!

## Contributing

### Development process

Development of this theme is done on [Github](https://github.com/MichaelArestad/Bookmarks). Pull requests welcome.

Don't commit directly to `master`. Create a new branch per issue you're working on. Then, when ready open a PR for review.

Example branches:
```
add/cool-thing
fix/dumb-bug
update/other-thing
```

### Setting up Grunt (compiles/autoprefixes Sass)
1. You need to have [Sass](http://sass-lang.com/install) installed.
* To check to see if you have it, type `sass -v` in your terminal.
* On Mac, type 'gem install sass' in your terminal. If you get an error, try `sudo gem install sass` instead.
* You need to have [Node.js](http://nodejs.org/) installed.
* To check to see if you have it, type `node -v` in your terminal.
* Download and install the package [here](http://nodejs.org/).
* Navigate to the plugin folder in your terminal.
* Type `npm install`, which installs Grunt and the node modules needed.
* Type `grunt`, which starts the Watch task and compiles/autoprefixes the Sass when changes are detected.
* You can exit grunt watch using `Control + C`
