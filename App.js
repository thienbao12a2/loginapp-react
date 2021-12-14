import React from 'react'; 
import { useEffect, useState } from "react";
import axios from 'axios';
 
const App = () => {
 
  var [disable, setDisable] = React.useState(true);
  const [phone, setPhone] = useState("");	
  const [access_token, setAccessToken] = useState("");	
  const [newEntry, setnewEntry] = useState("");
  var [message, setMessage] = useState("");	
  var [success, setSuccess] = useState("");	
  var Actual_Phone = "06657789988";
  const handleSubmit = event => {
		event.preventDefault();
		const newEntry = {phone : phone};
		let messageRef = fire.Database().ref('messages').orderByKey().LimitToLast(100);
		fire.Database().Ref('messages').push(phone);
		if(phone == Actual_Phone){
			axios.get('http://localhost:3001/random-number')
			 .then(res => {
				console.log(res.data.randomnumber);
			  })
			
			message  = "Access Code has been sent to your phone.";  
			setDisable(false); 
		}else{
			message  = "This phone number does not exists in Database"; 
			
		}
		setMessage(message, phone);
		 	
  } 
  const handleSubmit2 = event => {
		event.preventDefault();
	  	
		axios.get('http://localhost:3001/tally-access-code?access_token='+access_token)
			 .then(res => {
				success  = "Successfully Logged in !";   
				setSuccess(success);
			  
			  })
		
		
  }
  return ( 
    <div className="wrapper"> 
      <h1>Login</h1>
	  <div>{success}</div>
	  <div>{message}</div>
      <fieldset>
	  <form onSubmit={handleSubmit}>
         <label>
           <p>Phone Number:</p>
           <input onChange={(e) => setPhone(e.target.value)} type = "text" name = "phone" id = "phone"  />
           <button type="submit">Get Access Code</button>
         </label>
         
       
	   </form>
	   <form onSubmit={handleSubmit2}>
       <label>
           <p>Access Code:</p>
           <input onChange={(e) => setAccessToken(e.target.value)} accessCode="accessCode" />
         </label>
	   <button disabled={disable} type="submit">Login</button>
      </form>
	  </fieldset>
    </div>
  );
};

export default App;

 
