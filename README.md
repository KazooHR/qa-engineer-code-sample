# A simple TODO app with user authentication

In `cypress/integration`, create some sample UI tests using the built-in tooling (Cypress). Consult the documentation for how to properly write tests and organize them in a manner you see fit. We will ask questions about:

- What you choose to test
- What you choose _not_ to test
- How you organize the tests
- How robust your test suite is

Bonus points for finding bugs!

## Setup and running instructions

Requirements:

- Node Version Manager (nvm) and Node v. 14
- Yarn
- Docker
- Mac (if you're not on a Mac, give it a whirl :D)

### Install Docker

https://docs.docker.com/get-docker/

To make sure it works, open a terminal and run `docker -v`. The output should look similar to:

```bash
$ docker -v
Docker version 20.10.2, build 2291f61
```

### Install NVM

Follow the instructions at https://github.com/nvm-sh/nvm#installing-and-updating

To test that it works, open a terminal and run `nvm -v`. The output should look similar to:

```bash
$ nvm -v
0.36.0
```

### Install and use Node

```bash
$ nvm install 14
$ nvm use
```

### Install Yarn

```bash
$ npm i -g yarn
```

### Install dependencies

```bash
$ yarn
```

### Start Docker Dependencies

```bash
$ yarn docker
```

### Start the Development Server

```bash
$ yarn develop
```

### Navigate to the site

```bash
$ open http://localhost:8080
```

### Open the Test Runner

```bash
$ yarn cypress open
```

To write tests and view a sample test, open the folder:

```
cypress/integration/sample_spec.js
```
