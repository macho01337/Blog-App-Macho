import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/most-commented">Most Commented</Link></li>
            </ul>
           </nav> 
    );
};