import { useState } from "react";


export default function Details() {
  const [user, setUser] = useState({})
  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    window.location.pathname = '/thankyou'
}
    return (
      <div>
        <h1>Details</h1>
        <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Name </label>
         <input type="text" name="uname" required onChange={e => setUser({ ...user, name: e.target.value })} />
        
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="email" required onChange={e => setUser({ ...user, email: e.target.value })}/>
        
       </div>
       <div className="input-container">
         <label>Contact </label>
         <input type="number" name="pass" required onChange={e => setUser({ ...user, pass: e.target.value })}/>
         
       </div>
       <div className="input-container">
         <label>Pincode </label>
         <input type="number" name="pass" required onChange={e => setUser({ ...user, pass: e.target.value })}/>
         
       </div>
       <div className="button-container">
         <input type="submit" name ="login" />
       </div>
     </form>
      </div>
    );
  }