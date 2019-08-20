import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
    <nav id="menu">
        <Link to="/">Users</Link>
        <Link to="/tareas">Assignments</Link>
    </nav>
    );
}

export default Menu;
