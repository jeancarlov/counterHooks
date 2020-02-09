import React, { useEffect } from "react";
// import React from "react";
import { useForm } from "./useForm";

 
const Form = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

  const [values, handleChange] = useForm({ email: "", password: "" });
//   const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

     useEffect(() => {
         console.log('test');
         
         return () => {
           
         };
     })
  
      return (
          <div>
            
              <input 
              name= 'email'  
              value={values.email} 
              onChange={handleChange}
              />
              <input  
              type='password' 
              name= 'password'  
              value={values.password} 
              onChange={handleChange}
              />
             
            </div>
      );
  };
  

  export default Form;

  