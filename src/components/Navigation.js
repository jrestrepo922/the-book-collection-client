
import React from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '6px 6px',
    background: 'blue',
    textDecoraton: 'none',
    color: 'white'
}


const Navigation = () => (
        <div>
            <NavLink
            to="/"
            exact 
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Home</NavLink>

            <NavLink
            to="/genres"
            exact 
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Genres</NavLink>

            <NavLink
            to="/wishlist"
            exact 
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >WishList</NavLink>
        </div>
)


export default Navigation;