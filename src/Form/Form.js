import React, { useState, useForm } from "react";
// import React from "react";
// import { useForm } from "./useForm";

 export default function Form () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

//   const [values, handleChange] = useSate({ email: "", password: "" });
//   const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  
      return (
          <div>
              <input 
              name= 'email'  
              value={email} 
              onChange={e =>setEmail(e.target.value)}
              />
              <input  
              type='password' 
              name= 'password'  
              value={password} 
              onChange={e =>setPassword(e.target.value)}
              />

          </div>
      );
  };
  



  