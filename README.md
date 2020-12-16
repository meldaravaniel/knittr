# Knittr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

This baby webapp has dreams of being a fully-functioning knitting pattern generator based on methods outlined by [Naomi Parkhurst](https://gannetdesigns.com/tag/secret-code-rewrite/).  All the characters in a given word are converted to numbers in bases 2 through 10 (don't care to get into more letters for bases higher than that) and then mapped onto a grid to create a pattern (could be lace, aran, cables...).  Ultimately, I would like it to go so far as to make the grid and allow you to tweak it until you like it, then add in knitting symbols.

Baby steps. :3

# Release Notes

## [Current Release](https://meldaravaniel.github.io/knittr): 0.5

* upgrades Angular-CLI to 11.0.4
* upgraded all supporting dependencies to match either latest available, or that required by Angular
* installed newly-required dependencies for Angular
* uninstalled deprecated or obsolete dependencies, where applicable
* includes some UI 'enhancements' to make the nav-bar look a little prettier...but only a little. :3

### Release 0.4
* fixes the show/hide padding bug...weirdly, but fixed...

### Release 0.3
* adds grid and grid-sizing to the page to map the pattern
* user can select how many columns are shown for each base
* known issue: doesn't re-do the grids when ticking the checkbox for show/hide padding... :/

### Release 0.2
* Defaults the word to 'knitterz'...because reasons
* turned off the alert because it was annoying and there's no saved progress anyways.
* added a checkbox that allows user to choose whether to use 'same length' digits for each encoded character; ie. pad with zeroes

### Release 0.1
* Defaults the word to 'knitter' (mostly so I don't have to type something in every time while testing).
* Alerts when clicking "Let's Knit!" button, but no ability to save yet, so kind of a forward-looking feature.
* Encodes into binary and bases 3 - 10 using 1-26 as the numbers for each letter.
* Case insensitive.

## TODO

- [X] encode words into bases 2 - 10, show the numbers.
- [X] add a checkbox to allow you to choose show/hide padding zeroes
- [X] The Grid *cue Daft Punk*, but all out in one long line, representing the stitches
- [X] pad the grid with blank stitches if they don't evenly divide into the area of the grid.
- [X] provide 2D grid configurations of N stitches wide and as many tall as need be to accommodate all the stitches ~~(start with just an add/remove column clicky thing?)~~
- [X] upgrade to latest angular
- [ ] bug: first time you click "use leading zeroes" the grids don't respond.  Have to click/unclick to make it work.
- [ ] add some css to make it prettier (ng-material?)
- [ ] validate extraneous input (only allow English alpha characters for now.
- [ ] store word encodings in local storage
- [ ] allow user to see words in their local storage
- [ ] highlight or count the zeros in each base's encodings
- [ ] allow clicking on a base's encoding, take to a grid page
- [ ] make the grid drag-able

# Development

## Required software

* Verify that you are running at least node 10 and npm 6 by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.
* https://angular.io/guide/quickstart
* recommended: [Node Version Manager](https://github.com/coreybutler/nvm-windows/releases) to manage node and npm versions quickly.
## Setting up a new Dev Environment

Install the angular cli: `npm install -g @angular/cli@11.0.4`
Create the node modules: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production Build to Gh Pages

* Need to have installed gh-pages: `npm install -g gh-pages`
* Build it: `ng build --prod --base-href ""` 
* Deploy the dist folder that created to gh-pages: `gh-pages -d dist`
	* this step may require using [SSH keys](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) instead of HTTPS, as it doesn't prompt correctly for user/pass (and don't want to keep pass in plain text...)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
