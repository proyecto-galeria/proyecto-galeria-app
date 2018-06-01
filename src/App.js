import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {
    Col,
    Grid,
    Row,
} from 'react-bootstrap';
import Menu from './components/Menu';
import Concept from './components/Concept';
import Feedback from './components/Feedback';
import AddReceiver from './components/AddReceiver';
import Photo from './components/Photo';
import Record from './components/Record';
import ValidatePhoto from './components/ValidatePhoto';
import ValidteRecord from './components/ValidateRecord';

class App extends Component {
  render() {
    return (
        <Router>
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
                        <Menu />
                        <Route exact path="/" render={() => <div>Inicio</div>} />
                        <Route path="/concept" component={Concept} />
                        <Route path="/record" component={Record} />
                        <Route path="/photo" component={Photo} />
                        <Route path="/validate-photo" component={ValidatePhoto} />
                        <Route path="/validate-record" component={ValidteRecord} />
                        <Route path="/add-receiver" component={AddReceiver} />
                        <Route path="/feedback" component={Feedback} />
                    </Col>
                </Row>
            </Grid>
        </Router>
    );
  }
}

export default App;
