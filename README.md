# Notes, Assumptions, and Limitations

* The data is loaded in from `data.json`, which was coverted as is from the provided Excel spreadsheet.
* Styling is done with Bootstrap 4
* The "Move All" buttons respect the current text filter for each list (otherwise, it seemed their usefulness would be limited)
* Test coverage is not complete, but could be easily expanded given time
* For ease of implementation, a simple, impure Angular pipe was used for filtering the employee lists.  If a more performant application was required (i.e. for very large numbers of categories and employees), this would need to be refactored.
* There is limited error handling for the input JSON.  The format needs to be identical to the one used in `data.json`.

# HireOrFire

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
