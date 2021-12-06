# LinkedNYU

- [LinkedNYU](#linkednyu)
	- [Live Link](#live-link)
	- [Product Vision](#product-vision)
	- [Description](#description)
	- [Team Members](#team-members)
	- [Instructions for Build and Test Locally](#instructions-for-build-and-test-locally)
		- [Run the server](#run-the-server)
		- [Run Front-end](#run-front-end)
	- [Prototype](#prototype)
		- [Color Theme](#color-theme)
	- [Sprint Planning](#sprint-planning)
		- [Sprint 0](#sprint-0)
		- [Sprint 1](#sprint-1)
		- [Sprint 2](#sprint-2)
		- [Sprint 3](#sprint-3)
		- [Sprint 4](#sprint-4)
	- [Contributing](#contributing)
	- [References](#references)

## Live Link
http://137.184.103.24/ 

## Product Vision

Providing fast and convenient experience for NYU student to directly get access to course sources and solve their confusions. 

## Description

LinkedNYU provides a platform for students from the same course to find their classmates, discuss with each other and socialize. Previous students from this course can share their experience and help others decide whether to take this course or not. 

In order to provide most convenient and satisfying experience for NYU students, LinkedNYU is supposed to contain following basic functions:

- Viewing:

	Students can view other's posts and comment. 

	Logged in students can see new updates in the channels they joinned. 

- Searching: 

	Powerful searching tools that will enable students to find their courses based on the course number, name, name of Professor;

	Searching function will present student with relative channels and posts.

	Students can join course channel to keep updated.

- Posting:

	Students can post discussions in their channels. 

	Posts will be shared to other students, who can also join the discussion by commenting their own thoughts.


## Team Members

[@Comf0rTS1997](https://github.com/Comf0rTS1997)    
[@AnastasiaYe](https://github.com/AnastasiaYe)        
[@princeampofo](https://github.com/princeampofo)     
[@Willis1118](https://github.com/Willis1118)   
[@Azanah](https://github.com/azanah)

## Instructions for Build and Test Locally
### Run the server
Make sure you clone the repo. Inside your local repo, using terminal.    
Go to back end folder

```
cd back-end 
```
Install dependencies 
```
npm install
```
Start the server    
(there should be a browser windows shows up and tells you the server is running locally)
```
npm run devStart
```
Run the test   
(only for development purpose, this is not required for running the app)
```
npm run test
```
See test code coverage    
(only for development purpose, this is not required for running the app)
```
npm run coverage
```

### Run Front-end
( If you are inside back-end folder, make sure to go back first by typing `cd -` )     
Go to front end folder  
```
cd front-end
```
Install dependencies
``` 
npm install
```
Run front end program
```
npm start
```
Now you should see a browser window running the app.    

**Note:** This app is designed for mobile users, adjust browser size for better experience. 

## Prototype
[App Map and Wireframes](https://github.com/software-students-fall2021/user-experience-design-linkednyu)
### Color Theme
We choose NYU purple to be the main color of our theme.     
![color](images/LinkedNYU_ColorTheme.png)

## Sprint Planning
### Sprint 0
Product Owner [@Willis1118](https://github.com/Willis1118)       
Scrum Master [@AnastasiaYe](https://github.com/AnastasiaYe)  
### Sprint 1
Product Owner [@Willis1118](https://github.com/Willis1118)       
Scrum Master [@AnastasiaYe](https://github.com/AnastasiaYe)  
### Sprint 2
Product Owner [@princeampofo](https://github.com/princeampofo)  
Srum Master [@Comf0rTS1997](https://github.com/Comf0rTS1997)  
### Sprint 3
Product Owner [@princeampofo](https://github.com/princeampofo)    
Scrum Master [@AnastasiaYe](https://github.com/AnastasiaYe)  

### Sprint 4
Product Owner [@princeampofo](https://github.com/princeampofo)         
Scrum Master [@Comf0rTS1997](https://github.com/Comf0rTS1997)        


## Contributing

Anyone is welcome to dive in! Feel free to Open an issue or Pull Request. 

In terms of more detailed contributing rule, read through 
[CONTRIBUTING.md](https://github.com/software-students-fall2021/project-setup-linkednyu/blob/master/CONTRIBUTING.md).

## References
- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Digital Ocean](https://www.digitalocean.com/)
- [CircleCI](https://circleci.com/)
- [Docker](docker.com)
- [Material UI](https://mui.com/)
- [react-burger-menu](https://github.com/negomi/react-burger-menu)
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [Istanbul NYC](https://github.com/istanbuljs/nyc)
- [dotenv](https://github.com/motdotla/dotenv)
- [express-validator](https://express-validator.github.io/docs/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
  
