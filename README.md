# loginapp-react

Steps involved for project for login script

Install node is (official site)
Run the following command in CMD 
-npm install -g npm

Then installed react app 
-npx create-react-app my-app

As the react app has been created, now it's time to  run the app by following command 
-cd my-app  //my-app is the folder where I installed create-react-app into
-npm start

We will be able to see the skeleton React project via our browser. 

For creating login page, I modified the app.js so that it would compile a form.
Form will have following fields 

-Phone number 
-Access token 

I also created method for form submission if form is submitted with invalid number then it should say invalid phone number. If number is valid then it should say access token is sent to phone number.


We have created our login form its time to create a node js file for express backend so if form with a valid phone number then a get request is generated to express.js file to create a random number and return it's response back to app.js file and also this random access token will be texted to phone number using twilio API.

In express is file there is get request that can be executed with request the 
'/random-number'
 
In express.js file we are using different port hence 3001, so both react and node js files can be executed simultaneously. To start express.js file run 'node express.js' command.

Before running express.js file we will create a twillio trial account and will get API key and also we need to get a registered number from twillio account which will send SMS to our phone number.

Now if random access token is created then we need to send SMS with this random number and should also response back to app.js successfully.

Then we will put that random number in the second field of in our react app.js file and as we will login it will say successfully logged in.

Firebase database creation 
The phone number and access token that we are inserting should be stored in firebase database because in first step phone will be validated from firebase database and in second step access token will be stored in firebase database so it can match with input of login form then we will be successfully authenticated. 

For fire base we need to create a firebase account using Google email and also need to create an app along with database and we will get config details, we will use these config details in our react app as follows.

Create fire.js file and put all config details in it.

Now we need to install firebase with following command 

npm install firebase

init firebase

We will store phone number in firebase database 

var Firebase = require('firebase');
We can Instantiate firebase object to access or tally our code and phone number.
