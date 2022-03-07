import { NavLink as Link } from 'react-router-dom';
import logo from "./asset/us-deloitte-logo.png"

function Home() {
  return (
    <div className="App">
        <div classname="navbar">
        <nav>
        <ul>
        <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Table">Table</Link>
    </li>
    <li>
      <Link to="/Thankyou">Thankyou</Link>
    </li>
    </ul>
    </nav>
  </div>
         <h1>Hello SCNO!!!</h1>
         <h2>This is Front-End Development Case Study of Deloitte Internship</h2>
         <h3>Our Facilitators: Saurav Kumar and Navil Saini</h3>
         <img src= {logo} alt="logo" width={"350px"} />
         <div class="footer">
         <p>Made with ❤️ by  Abhishek Kumar</p>
  
</div>

    </div>
  );
}

export default Home;