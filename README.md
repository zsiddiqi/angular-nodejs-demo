# FinnaiZsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

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

## Steps:

``` bash
ng new finnai-zs-demo
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS

cd finnai-zs-demo

ng g component components/add-user --module app
ng g component components/edit-user --module app
ng g component components/users-list --module app

ng add @angular/material
Installing packages for tooling via npm.
Installed packages for tooling via npm.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
UPDATE package.json (1323 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (811 bytes)
UPDATE angular.json (3796 bytes)
UPDATE src/index.html (515 bytes)
UPDATE src/styles.css (181 bytes)

mkdir backend && cd backend

npm install --save express mongoose cors body-parser

npm install nodemon --save-dev

mkdir database && cd database && touch db.js

mkdir routes && cd routes && touch user.route.js

touch app.js

cd .. && ng g s shared/api

# run the mongodb instance
docker run --rm -d -p 27017-27019:27017-27019 --name mongodb mongo:latest

npm install jest --save-dev

npm install @shelf/jest-mongodb --dev

DEBUG=jest-mongodb:* MONGO_URL=mongodb://localhost:27017/finnaizsdemo-test npm test
```

## REST Calls

> // POST: http://localhost:8000/api/add-user

{"user_name":"Alice","user_email":"alice@test.io","section":"C","subjects":[{"name":"Maths"},{"name":"English"}],"dob":"1991-02-06","gender":"Female"}

> Response:

{"subjects":[{"name":"Maths"},{"name":"English"}],"_id":"5f0e14b53027ed1dfb3fcfa5","user_name":"Alice","user_email":"alice@test.io","section":"C","dob":"1991-02-06T00:00:00.000Z","gender":"Female","__v":0}


