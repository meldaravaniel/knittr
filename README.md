# Knittr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This baby webapp has dreams of being a fully-functioning knitting pattern generator based on methods outlined by [Naomi Parkhurst](https://gannetdesigns.com/tag/secret-code-rewrite/).  All the characters in a given word are converted to numbers in bases 2 through 10 (don't care to get into more letters for bases higher than that) and then mapped onto a grid to create a pattern (could be lace, aran, cables...).  Ultimately, I would like it to go so far as to make the grid and allow you to tweak it until you like it, then add in knitting symbols.

Baby steps. :3

# Release Notes

## [Current Release](https://meldaravaniel.github.io/knittr)

* Defaults the word to 'knitter' (mostly so I don't have to type something in every time while testing).
* Alerts when clicking "Let's Knit!" button, but no ability to save yet, so kind of a forward-looking feature.
* Encodes into binary and bases 3 - 10 using 1-26 as the numbers for each letter.
* Case insensitive.

## TODO

- [X] encode words into bases 2 - 10, show the numbers.
- [ ] add some css to make it prettier (ng-material?)
- [ ] validate extraneous input (only allow English alpha characters for now.
- [ ] store word encodings in local storage
- [ ] allow user to see words in their local storage
- [ ] highlight or count the zeros in each base's encodings
- [ ] allow clicking on a base's encoding, take to a grid page
- [ ] The Grid *cue Daft Punk*, but all out in one long line, representing the stitches
- [ ] provide 2D grid configurations of N stitchs wide and as many tall as need be to accomodate all the stitches (start with just an add/remove column clicky thing
- [ ] pad the grid with blank stitches if they don't evenly divide into the area of the grid.
- [ ] make the grid drag-able

# Development

## Required software

> Verify that you are running at least node 6.9.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.
> https://angular.io/guide/quickstart


## Setting up a new Dev Environment

Install the angular cli: `npm install -g @angular/cli@1.6.5`
Create the node modules: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Production Build to Gh Pages

Need to have installed gh-pages: `npm install -g gh-pages`
Build it: `ng build --prod` (don't need to add a base-href to this, it's already on the URL. 
Deploy the dist folder `ng build --prod` created to gh-pages: `gh-pages -d dist`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
