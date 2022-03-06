
import React from 'react'



export default function Details() {
 
  const handleSubmit = event => {
    event.preventDefault();
   
    window.location.pathname = '/thankyou'
}
    return (
      <div>
        <h1>Welcome to User Details</h1>
        <form onSubmit={handleSubmit}>

{/* 
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
          <td>{info.contact}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name</th>
					<th>City</th>
          	<th>Contact</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;  */}

       {/* <div className="input-container">
         <label>Name </label>
         <input type="text" name="uname" required onChange={e => setUser({ ...user, name: e.target.value })} />
        
       </div> */}
       {/* <div className="input-container">
         <label>Email </label>
         <input type="email" name="email" required onChange={e => setUser({ ...user, email: e.target.value })}/>
        
       </div>
       <div className="input-container">
         <label>Contact </label>
         <input type="Phone number" name="pass" pattern="[7-9]{1}[0-9]{9}" required onChange={e => setUser({ ...user, pass: e.target.value })}/>
         
       </div>
       <div className="input-container">
         <label>Pincode </label>
         <input type="number" name="pass" required onChange={e => setUser({ ...user, pass: e.target.value })}/>
       </div> */}

       <div className="button-container">
         <input type="submit" name ="Save" />
       </div>
     </form>
      </div>
    );
  }
