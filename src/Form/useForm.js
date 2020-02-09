import {useState} from 'react';

export const useForm = (intialValues) =>{
    const [values, setValues] = useState(intialValues);
 
    
    // const [password, setPassword] = useState("");

    return [ values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.values
        });
        
    }];

};