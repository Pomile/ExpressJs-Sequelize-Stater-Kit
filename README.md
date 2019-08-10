# ExpressJs-Sequelize-Stater-Kit
This Project will help you to get started quickly with your Backend project using ExpressJs, ORM-Sequelize, and Postgres


## Technologies

* Express - web framework
* Nodejs- Runtime Environment for Javascript.
* [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), and [supertest](https://github.com/visionmedia/supertest) - Test framework and other dependencies
* [nyc](https://www.npmjs.com/package/nyc) and [istanbul](https://github.com/istanbuljs/nyc) - for coverage test.
* [morgan](https://www.npmjs.com/package/morgan) - logging library
* [Sequelize](https://sequelize.org/master/manual) - Postgres ORM
* [Postgres]() - Postgres Database

## How to use

    1. Download the project from the repository
    2. Unzip the project
    2. Copy and paste all the files and folders in the project to your new project directory
    3. run `npm install`

## Database Configuration
After you install your project dependencies and dev dependency. you will need to:
1. create environment variable for(database name, password and username). see instructions on [how to create enviroment variable for your project]()
2. [Download]() and [install]() postgres database
3. [Create database]() for test and development environment

## Create Database
To create database in your production enviroment run `npm run createdb`.
To create database in your development environment run `npm run create:dev:db`.
To create database in your test environment run `npm run create:test:db`.

## Test

To run your project in a test enviroment execute:
    ```
        > `npm test or npm run local:test`
    ```
## Development

Once you are done with your database configuration you can start your project in development mode. To start your project in this mode, all you need to do is run `npm start`

*How to test your endpoint in development mode*
Use Postman to test out your endpoints. You can download Postman with this [Link]() and install it.

