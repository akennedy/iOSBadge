## Build a custom version

### Dependencies for building a custom version of iOSBadge:

* [Ruby](http://www.ruby-lang.org/en/downloads/) ( [Ruby version manager](https://rvm.io/rvm/install/) )
* [Node.js](http://nodejs.org/) ( [Node version manager](https://github.com/creationix/nvm) )
* [Compass](http://compass-style.org/) ( `gem install compass` ) *
* [Grunt](http://gruntjs.com/) ( `npm install grunt -g` ) *

\* add `sudo` in front of the command if needed

### How to build & contribute

1. Make sure that you have [Grunt](http://gruntjs.com/) installed.
2. In terminal move to iOSBadge folder and run `npm install` to install all dependencies.
3. Make all Javascript changes in Coffeescript file(s), CSS changes in SCSS file(s). Make your changes only to files located inside the `src` folder.
4. run `grunt` to build iOSBadge
5. Make sure that all changes are valid and open a pull request

You can use the `iosbadge.scss` file located in `src/iosbadge/scss` folder to add your custom themes and sizes. 

All Javascript changes should be written in Coffeescript to `iosbadge.coffee` file located in `src/iosbadge/coffee` folder.

Run `grunt` after your changes to build your custom version.

### Building and running unit tests

Source files for jasmine tests can be found inside `src/test` folder. 

You can build and run unit tests by running `grunt test` in the plugin folder in terminal.

### API documentation

Plugin API documentation can be found inside the `docs` folder.




