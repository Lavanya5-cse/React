import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <ul>
                <li><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
                <li><NavLink activeClassName="active" to='AboutUs'>About</NavLink></li>
                <li><NavLink activeClassName="active" to='ContactUs'>Service</NavLink></li>
            </ul> 
        </>
    )
}

export default Header
