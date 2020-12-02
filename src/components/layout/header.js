import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="headerStyle">
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#0D6D64',
    textDecoration: 'none',
}

export default Header;