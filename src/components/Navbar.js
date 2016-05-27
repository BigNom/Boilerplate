import React from 'react';
import { IndexLink, Link } from 'react-router';

class Navbar extends React.Component {
    render() {
            return (
                <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Boiler Plate</li>
              <li>
                     <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
                   </li>
                   <li>
                     <Link to="/contact" activeClassName="active-link">Contact</Link>
                   </li>
                   <li>
                     <Link to="/about" activeClassName="active-link">About</Link>
                   </li>
                 </ul>
               </div>
               <div className="top-bar-right">
                   <ul className="menu">
                     <li className="menu-text">
                       Created by <a href="#" target="_blank">Simon Biddle</a>
                     </li>
                   </ul>
      </div>
    </div>
            );
        }
    }
    export default Navbar;
