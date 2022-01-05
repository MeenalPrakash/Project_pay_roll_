import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignIn()  {

    
  const History = useHistory();
  const [user , setUser] = useState({ name:"",password:"" });
   let name,value;
  const handleInputs = (e) =>{
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value})
  }

  const PostData = async (e) =>
  {
     e.preventDefault();
     const { name,password}=user;
     const res= await fetch("/register", 
     {
         method:"POST",
         headers: {
             "Content-Type" : "application/json"
         },
         body:JSON.stringify({
             name,
             password

         })
     })
     const data= await res.json();
     if(data.status === 422 || !data)
     {
         window.alert(" invalid Succesfull");
         console.log("Invalid registration");
     }
     else{
        window.alert("  Succesfull");
        console.log(" registration");

        History.push("/register");
     }



  }

return (
	<div>
	 <form method="POST">
      <label>Enter your name:
      </label>
        <input style={{ padding: 12,width: 300}} type="text" name="name" value={user.name} onChange={handleInputs} required/>
     
      <label>Enter the password: </label>
      <input style={{ padding: 12,width: 300}} placeholder="Enter Password" name="password" value={user.password} onChange={handleInputs}  required type="password" />
       <button onClick={PostData}>Login</button>
      
    </form>
	</div>
);
}

export default SignIn;