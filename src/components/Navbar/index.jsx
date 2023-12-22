import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = ()=> {
    return (

        <div className="container">
            <nav className="" id="sidebar">
            <ul className="listatwo">
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) =>
                    isActive ? "active" : ""
  }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about-me'>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/skills'>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-work'>
                        My work
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        
    )
}

export default Navbar