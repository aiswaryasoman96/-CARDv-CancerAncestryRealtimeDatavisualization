import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = ( {NavBarLinks} ) => {
  return (
    <nav className='NavBar'>
        <span className='NavBar_logo'>
        Cancer and Ancestry Relationship Data Visualization (~CARDV)
        </span>
        <ul className='NavBar_list'>
            {NavBarLinks.map((item) => {
                return (
                    <li className="NavBar_item" key={item.title}>
                         <Link className='NavBar_link' to={item.url}>{item.title}</Link>
                    </li>
                );
            })}
        </ul>
    </nav>
  )
}

export default NavBar