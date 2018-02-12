# Tiny Anthems
_this is incomplete!_
_this is a project made for a musician to store their custom made songs for clients on the site and allow each client to login and access their specific song files. It was an opportunity to explore Angular CLI and Firebase_

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

#### Approach: Angular/Angularfire migration

Angular Firebase modules have been split up, and there's no easy copy and paste implementation for user account creation. I will need to follow Angular's migration guide and other resources to try to get the package imports to work properly.

9:15am
Start migration guide

9:44am
Migration guide proved too complicated and in some cases unnecessary (not all code needed migrating) and thus I have resorted to reading random posts on the internet to try to figure out what the problem is exactly.

10:27am
Instead I scanned google results trying various things until finally I found a solution so simple I'm wondering why the documentation failed to mention it:
```
import * as firebase from 'firebase';
```
adding this at the top of the api-keys file seems to have fixed the issue: a test account now exists on the server.

11:24am
But this only works some of the time. The first time the page loads it works, until the server is relaunched, then it breaks. If the imports on the LogonComponent ts file change, it works again, until relaunched, when it breaks.

#### Solution: firebase not defined
11:40am
Eventually google turned up a post about a similar issue that was a result of an outdated Angularfire version. After several attempts to get the new version with npm, angularfire2@5.0.0-rc.6 finally installed. This also required changing some imports to use deprecated libraries in Angularfire.

### Problem: ERROR Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[LogonComponent -> AngularFireAuth]:

1:19pm
I cannot find any help on this and I've decided to find a video tutorial or some complete knowledge and start over.

1:38pm
Finally for the first time landed on angularfirebase.com to follow an official lesson instead of googling around the world forever and getting lost in outdated guides.

1:45pm
Lunch Time

2:41pm
I have returned and realized that I fell into the very thing I aimed to avoid today: getting impatient and spazzing out. I have decided that I may not accomplish the thing I wanted to by the end of the day but I will calmly advance my knowledge of the subject by reading a reliable source, angularfirebase.com/lessons.

3:43pm
Turns out I need to pay for angularfirebase.com so I returned to firebase.google.com to read lesson on auth: https://firebase.google.com/docs/auth/web/password-auth

4:09pm
Pretty exhausted at this point with almost nothing to show for it. I feel that if I had spent all the time I did learning from firebase.google.com documentation instead of on google frantically looking around forums for a fix I'd probably have something to show for it by now.

4:50pm
I really thought I'd have at least a user account creation thing completed by the end of the day, but instead I have nothing. Literally had to undo everything I tried today because of how confusing and misleading all the solutions I found online were. Deciding to do something that would test my patience and ended up being a self-fulfilling prophecy. I'm starting to think the progress I need to make is more emotional than anything. I tend to enjoy coding so much that it feels like a game at times and when I get frustrated it's because there is an assumption that what I'm doing should be fun. When a serious problem requires work to implement a proper solution I need to switch gears and treat it as a job.

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
