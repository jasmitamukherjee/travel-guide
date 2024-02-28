import React,{ useState } from 'react'
import './SignupFormStyles.css';
import { Login } from "./Login";
import { Register } from "./Register";





export default function Signupform() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    return (
      <div className="Signup">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    );
}
