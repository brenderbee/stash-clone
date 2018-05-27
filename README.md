# _Stash Clone_

#### _Assignment for Epicodus to practice cloning a website in Angular CLI._

#### By: _**Brenda Franco**_

## Description

_This webpage application is designed to clone the
"teapots" section of the [Stash Tea](https://www.stashtea.com/collections/teapots) website._

_This project uses Angular CLI as a framework. All dependencies required are included in this project. Node and npm are required to run Angular CLI v1.6.5._

_View deployed site: https://stash-clone.firebaseapp.com/_

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5._

## Screenshots

Original: <br>
<img src="https://github.com/brenderbee/building-layouts/blob/master/src/assets/readme-img/desktop-og.png?raw=true" width="400" />

Clone: <br>
<img src="https://github.com/brenderbee/building-layouts/blob/master/src/assets/readme-img/desktop-clone.png?raw=true" width="400" />

## Setup/Installation Requirements

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Angular CLI installed, then skip to "Install Dependencies."

#### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

#### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    ```
    $ brew install node
    ```
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    ```
    $ node -v
    $ npm -v
    ```
#### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    ```
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    ```
    $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
    ```
#### Angular CLI Installation
  * As depicted on the Angular CLI homepage we can install the package with one simple command:
    ```
    $ npm install -g @angular/cli@1.6.5
    ```
#### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    ```
    $ npm install
    ```
#### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    ```
    $ npm install -g karma-cli
    ```

#### API Key
  You will need to make a Firebase account...

  Once you have an API key do the following:
    * Create a api-keys.ts file in the src/app/ directory of this project.
    * Add the API key in the api-keys.ts file as shown:
    ```
    export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
    ```

#### Development server
  * Run the following for a dev server:
    ```
    $ ng serve --open
    ```
  * Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build
  * Run the following to build the project:
    ```
    $ ng build
    ```
  * The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build:
    ```
    $ ng build -prod
    ```
#### Running unit tests
  * Run the following to execute the unit tests via [Karma](https://karma-runner.github.io):
    ```
    $ ng test
    ```
#### Running end-to-end tests
  * Run the following to execute the end-to-end tests via [Protractor](http://www.protractortest.org/):
    ```
    $  ng e2e
    ```
#### Further help
  * To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    ```
    $ npm run build
    ```
  * To run the local test server:
    ```
    $ npm run start
    ```
  * To run test in Karma:
    ```
    $ npm test
    ```

## Known Bugs
_Adding an item to cart works from the quickview modal, but not the dynamically routed detail page._
_Sort select box does not work._
_Project does not differentiate between selected teapot colors._
_If particular teapot has many colors, the quickview does not scroll to accommodate those colors._

## Contact
_Do not contact anyone with questions or comments regarding this project._

## Technologies Used
| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * Angular CLI | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
| * babel-loader |  |
| * css-loader & style-loader | | |

### Specs
1. The program should return the title "Teapots".
  * Input: n/a
  * Output: "Teapots"

### User Stories
1. As a user, I want to see all of the teapots available for purchase. (MET)
2. As a user, I want to click a teapot and see a summary of that teapot. (MET)
3. As a user, I want to see the price of a selected teapot. (MET)
4. As a user, I want to add a teapot to my shopping cart from the quickview modal. (MET)
5. As a user, I want to add a teapot to my shopping cart from the detail view. (FUTURE FEATURE)
6. As a user, I want to be able to add multiple teapots to my shopping chart. (MET via quickview)
7. As a user, I want to see my shopping cart update when a new teapot is added to it. (MET via quickview)
8. As a user, I want to sort the available teapots by price (ascending and descending). (FUTURE FEATURE)
9. As a user, I want to sort the available teapots by best-selling. (FUTURE FEATURE)
10. As a user, I want to sort the available teapots by rating. (FUTURE FEATURE)
11. As a user, I want to delete items from shopping cart. (FUTURE FEATURE)

### License
Copyright (c) 2018 ****_Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
