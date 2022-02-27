import { useState } from "react";
import logo from "./asset/us-deloitte-logo.webp"

export default function Login() {
  const [user, setUser] = useState({})
  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    window.location.pathname = '/details'
}
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
       <div className="input-container">
         <input type="text" name="uname" placeholder="Name" required onChange={e => setUser({ ...user, name: e.target.value })} />
        
       </div>
       <div className="input-container">
       
         <input type="email" name="email" placeholder="Email" required onChange={e => setUser({ ...user, email: e.target.value })}/>
        
       </div>
       <div className="input-container">
        
         <input type="password" name="pass" placeholder="Password" required onChange={e => setUser({ ...user, pass: e.target.value })}/>
         
       </div>
       <div className="button-container">
         <input type="submit" style={{ width: '25%'}}  value ="Login" />
       </div>
     </form>
     <img src= {logo} alt="logo" />
      </div>
    );
  }
