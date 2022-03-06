import { NavLink as Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
        <div classname="Navbar">
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
  </div>
         <h1>Hello!!!</h1>


  <div classname="Footer">
      <p>   made by abhi</p>
  </div>

    </div>
  );
}

export default Home;