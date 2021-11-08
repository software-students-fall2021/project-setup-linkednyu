# Steps on how to run the app lives here
## 1 Run Express.js
Inside the repo, open a terminal, type `cd backend`.   
Type `npm run devStart`.      
## 2 Run React.js   
Open another terminal, make sure you are at the default folder instead of backend, type `cd front-end`.     
Type `npm start`.     
The program should be working.       
## Note
Use `npm install` to install independencies if you haven't had them.     

# Instructions for Developers
All code goes inside controllers and routes folder.      
Do not touch server.js / app.js file.      
All API's or keys will be inside of .env however , env files are not pushed to repository since they are included in git ignore.      
Front end runs on port 3000 whilst backend runs on port 5000.      
To make a call to the backend , just specify the url in the front end and you're good to go since I already set up a proxy in front-end(package.json file).     
## Unit test
Wirte your test in `test` folder.     
The name of your test file should be consistent with the file you want to test, with a `.spec` to classify this is a test file.     
Type `npm run test` in terminal to run test.     
Type `npm run coverage` in terminal to see test code coverage.     
