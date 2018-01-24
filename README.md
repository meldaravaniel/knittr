# Meldaravaniel.Github.Io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

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

## Production Build

Need to have installed gh-pages: `npm install -g gh-pages`
Build it: `ng build --prod --base-href "knittr/"` (name of the repo should be the base-href) 
Deploy the dist folder `ng build --prod` created to gh-pages: `gh-pages -d dist`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
