import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({})
  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    if(user.email === "abhishek933625@gmail.com" && user.pass === "Abhi123"){
    window.location.pathname = '/table'}
    else{
      alert("Invalid Credentials")
    }
}
    return (
      <div>
        <h1> User Login</h1>
        <form onSubmit={handleSubmit}>
       {/* <div className="input-container">
         <input type="text" name="uname" placeholder="Name" required onChange={e => setUser({ ...user, name: e.target.value })} />
        
       </div> */}
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
   
     <div class="footer">
     <p>Made with ❤️ by Abhishek Kumar</p>
</div>
      </div>
    );
  }
