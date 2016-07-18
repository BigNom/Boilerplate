import React from 'react';
import { IndexLink, Link } from 'react-router';

class Navbar extends React.Component {
    render() {
            return (
                <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">RWD</li>
              <li>
                     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
                   </li>
                   <li>
                     <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
                   </li>
                   <li>
                     <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                   </li>
                 </ul>
               </div>
               <div className="top-bar-right align-right">
                   <ul className="menu align-right">
                     <li className="menu-text">
                       Created by <a href="index.html" target="_blank">Element Web</a>
                     </li>
                   </ul>
      </div>
    </div>
            );
        }
    }
    export default Navbar;
