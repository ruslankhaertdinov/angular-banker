# AngularJS Simple Banker Application

###[Visit demo app](https://simple-banker.herokuapp.com/app)

### Starting the Web Server
In either case you will need the application to be running via the web-server.
From the root folder of the repository run:

```
npm start
```

##End 2 End Testing (Protractor)
To run the end-2-end tests against the application you use [Protractor](https://github.com/angular/protractor).


The application should now be available at `http://localhost:8000/app`

### Testing with Protractor

As a one-time setup, download webdriver.
```
npm run update-webdriver
```

Start the Protractor test runner using the e2e configuration:

```
npm run protractor
```

##Unit testing (Karma)
From the root folder of the repository run:

```
npm test
```