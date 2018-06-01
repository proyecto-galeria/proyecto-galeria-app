import React from 'react';
import {Link} from 'react-router-dom';
import {
    DropdownButton,
    MenuItem,
} from 'react-bootstrap';

const Menu = () => (
<DropdownButton
    title="Menú"
    id="Menú"
    >
    <MenuItem><Link to="/">Inicio</Link></MenuItem>
    <MenuItem><Link to="/concept">Concepto</Link></MenuItem>
    <MenuItem><Link to="/record">Registro</Link></MenuItem>
    <MenuItem><Link to="/photo">Foto</Link></MenuItem>
    <MenuItem><Link to="/validate-photo">Validar Foto</Link></MenuItem>
    <MenuItem><Link to="/validate-record">Validar Registro</Link></MenuItem>
    <MenuItem><Link to="/add-receiver">Agregar destinatario</Link></MenuItem>
    <MenuItem><Link to="/feedback">Retroalimentación</Link></MenuItem>
</DropdownButton>
);

export default Menu;
