import React from 'react';
import {
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock,
} from 'react-bootstrap';

export default class Form extends React.Component {
    state = {
        value: ''
    }

    getValidationState = () => {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="controlId"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>
                        Concepto:
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Nombre del Concepto"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>
                        El concepto debe tener al menos diez caracteres
                    </HelpBlock>
                </FormGroup>
            </form>
        );
    }
}
