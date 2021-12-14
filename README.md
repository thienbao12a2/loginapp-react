# loginapp-react

Steps involved for project for login script

Install node is (official site)
Run the following command in CMD 
-npm install -g npm

Then installed react app 
-npx create-react-app my-app

As the react app created now it's time to  run the app by following command 
-cd my-app
-npm start

We will be able to see home page of React 

For creating login page created a page app.js and imported react components and also react state components for form inputs states to be handled.
Form will have following fields 

-Phone number 
- Access token 

As Created the form in react using html and also created method for form submission if form is submitted with invalid number then it should say invalid phone number. If number is valid then it should say access token is sent to phone number.

Now export the app using 
Export default app

We have created our login form its time to create a node js file for express backend so if form with a valid phone number then a get request is generated to express.js file to create a random number and return it's response back to app.js file and also this random access token will be texted to phone number using twilio API.

In express is file there is get request that can be executed with request the 
'/random-number'
Remember 
In express.js file we are using different port hence 3001, so both react and node js files can be executed simultaneously. To start express.js file run 'node express.js' command.

Before running express.js file we will create a twillio trial account and will get API credentials and also we need to get a registered number from twillio account which will send SMS to our phone number.

Now if random access token is created then need to send SMS with this random number and should also response back to app.js with success.

This time we will put that random number in the second field of form I'm react app.js file and as we will login it will say successfully logged in.

Firebase database creation 
Remember the phone number that we are inserting should be stored in firebase database and access token because in first step phone will be validated from firebase database and in second step access token will be stored in firebase database so it can be matched with input of form then we will be successfully authenticated. 

For fire base we need to create a firebase account using Google email and also need to create an app along with database and we will get config details we will use these config details in our react app as follows.

Create fire.js file and put all config details in it.

Now need to install firebase with following command 

npm install firebase

init firebase

We will store phone number in firebase database 

var Firebase = require('firebase');
We can Instantiate firebase object to access or tally our code and phone number.
