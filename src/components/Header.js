import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="header">
                <a> 
                    <Link to={'/'} className="logo">
                        Mi Aerolínea
                    </Link> 
                </a>
                <div class="right">
            <Link to={"/flights"}
                className="active btn"
            >Mis Vuelos</Link>
            </div>
        </nav>
     );
}
 
export default Header;