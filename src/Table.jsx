
import React from 'react'
import JsonData from './data.json'


	const handleSubmit = event => {
	  event.preventDefault();
	  window.location.pathname = '/thankyou'
  }

     
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
              <h1>Welcome to User Details</h1>
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

			<form onSubmit={handleSubmit}> 
			<button type="Submit" style={{width:"200px", marginTop:"50px"}}>Submit</button>
			</form>
			<div class="footer">
			<p>Made with ❤️ by <a href="https://github.com/Abhishekkr93" title="Abhishek Kumar" target="_blank" rel="noreferrer"> Abhishek Kumar</a></p>
</div>
		</div>

        
	)
}

export default JsonDataDisplay; 


