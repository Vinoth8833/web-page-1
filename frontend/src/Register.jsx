import  { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const RegisterForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


console.log(value)

  const handleOnChange = (e) => {
    const { name, value} = e.target;
    setValue(pre=>({...pre , [name]:value }));
   
  };

  const handleOnClick = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post("https://web-page-1-fwmr.onrender.com/register", value);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => handleOnChange(e)}
        value={value.name}
      />
      

      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleOnChange(e)}
        value={value.email}
      />
   

      <div className="input-container">
        <input
          type= "text"
          placeholder="Password"
          name="password"
          onChange={(e) => handleOnChange(e)}
          value={value.password}
        />
       
      </div>
      

      <div className="input-container">
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleOnChange(e)}
          value={value.confirmPassword}
        />
       
      </div>
      

      <button onClick={(e) => handleOnClick(e)}>Submit</button>
     

      <p>
        If you have an account, <Link to="/">Click here</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
