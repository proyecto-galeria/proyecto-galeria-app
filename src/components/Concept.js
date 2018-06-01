import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default () => {
    return (
        <React.Fragment>
            <div>
                <h2>Nombre concepto: Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic</h2>
            </div>
            <div>
                <Link to="/">Soriana parque de los venados</Link>
             </div>
            <div>
                <address>
                    Cordoba #110 Colonia Roma Norte Delegación Cuauhtémoc, Código Postal 064700
                </address>
            </div>
            <footer>
                <Link to="/record">
                    <Button bsStyle="primary">
                        Nuevo Registro
                    </Button>
                </Link>
            </footer>
        </React.Fragment>
    );
};
