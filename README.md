# Tiny Anthems
_this is a project made for a musician to store their custom made songs for clients on the site and allow each client to login and access their specific song files._

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Installation
In terminal:

1. $ git clone https://github.com/noodlebrains/tiny-anthems.git
1. $ cd tiny-anthems
1. $ npm i
1. $ cd src/app
1. $ touch api-keys.ts
1. (after creating a firebase project, open 'add firebase to your web app' via their website console and format their info in the following way and save into api-keys.ts):
```
export let masterFirebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "xxxxx.firebaseapp.com",
    databaseURL: "https://xxxxx.firebaseio.com",
    projectId: "xxxxx",
    storageBucket: "xxxxx.appspot.com",
    messagingSenderId: "xxxxx"
  };
  firebase.initializeApp(masterFirebaseConfig);
  ```
1. $ cd ../..
1. $ ng serve --open

## Self Assessment

### My Main Flaw: Patience

The thing I need to work on most is problem solving things that are not readily available from documentation or tutorials. I started an Angular project that I wanted to incorporate user account creation and login, but quickly found that I'd have to read between the lines in order to get it to work. Updates to Firebase technology meant that Angular 2 tutorials were not entirely accurate anymore. After an hour of trying to force it to work, I discovered something called a "migration guide", something I had not heard of before. This was apparently a way to tie loose ends together in the documentation, but it requires reading and careful consideration to exact the solution amidst the chaos.

I decided to work on this issue on Friday because it would require both digging deep into the problem for a solution and careful documentation in this README, two things I tend to avoid.

### Problem: firebase not defined

At the time of my first commit on Friday, there is a console error that reads:

> Uncaught ReferenceError: firebase is not defined

> webpack-internal:///../../../../../src/app/api-keys.ts:9

and a terminal error of:

> ERROR in src/app/api-keys.ts(9,1): error TS2304: Cannot find name 'firebase'.

> src/app/logon/logon.component.ts(17,5): error TS2304: Cannot find name 'firebase'.


This error occurs after following the instructions on Firebase's documentation. When researching the problem, it appears that since angularfire2@^4.0.0-rc.1 their modules have been rearranged to make things tree-shakeable.

#### Approach: Angular migration guide

Angular Firebase modules have been split up, and there's no easy copy and paste implementation for user account creation. I will need to follow Angular's migration guide and other resources to try to get the package imports to work properly.

Migration guide proved too complicated and in some cases unnecessary (not all code needed migrating)

10:27am
Instead I scanned google results trying various things until finally I found a solution so simple I'm wondering why the documentation failed to mention it:
```
import * as firebase from 'firebase';
```
adding this at the top of the api-keys file seems to have fixed the issue: a test account now exists on the server.

11:24am
But this only works some of the time. The first time the page loads it works, until the server is relaunched, then it breaks. If the imports on the LogonComponent ts file change, it works again, until relaunched, when it breaks.


#### Solution: firebase not defined

## Angular 2 Info

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
