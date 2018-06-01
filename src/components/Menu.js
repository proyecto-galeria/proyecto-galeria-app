import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
<ul>
    <li>
        <Link to="/">Inicio</Link>
    </li>
    <li>
        <Link to="/concept">Concepto</Link>
    </li>
    <li>
        <Link to="/record">Registro</Link>
    </li>
    <li>
        <Link to="/photo">Foto</Link>
    </li>
    <li>
        <Link to="/validate-photo">Validar Foto</Link>
    </li>
    <li>
        <Link to="/validate-record">Validar Registro</Link>
    </li>
    <li>
        <Link to="/add-receiver">Agregar destinatario</Link>
    </li>
    <li>
        <Link to="/feedback">Retroalimentación</Link>
    </li>
</ul>
);

export default Menu;
