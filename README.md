How to start

- Go to root of project directory
- npm install -g typescript
- npm install
- ./node_modules/.bin/typings install
- curl https://bootstrap.pypa.io/get-pip.py | python (for install python package)
- pip install robotframework
- pip install robotframework-selenium2library

How to verify that setup is completed
- npm test: test should be run and passed
- npm run server, then open browser and go to http://localhost:3000. Open developer tools in Chrome,
  any errors should not be present in console
- robot spec/e2e : verify that robot framework is working

Trouble shooting
- If you already have robotframework in your machine,
  - sudo pip install robotframework --upgrade
  - sudo pip install robotframework-selenium2library --upgrade
   