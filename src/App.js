import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import {
    Button,
    Col,
    Grid,
    Row,
} from 'react-bootstrap';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
        <Router>
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/locations">Locaciones</Link>
                            </li>
                            <li>
                                <Link to="/records">Registros</Link>
                            </li>
                            <li>
                                <Link to="/tasks">Tareas</Link>
                            </li>
                        </ul>
                        <Route exact path="/" render={() => <Button bsStyle="primary">Inicio</Button>} />
                        <Route path="/records" component={Form} />
                    </Col>
                </Row>
            </Grid>
        </Router>
    );
  }
}

export default App;
