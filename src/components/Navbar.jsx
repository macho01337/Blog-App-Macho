import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
            <h1 className="blog">Blog App</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
             </ul>
            </div> 
           </nav> 
    );
};


export default Navbar;