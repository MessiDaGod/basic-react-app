import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({});

class PasswordInput extends Component {
    render() {
        return (
            <TextField
                type="password"
                {...this.props}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <RemoveRedEye />
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
};

PasswordInput = withStyles(styles)(PasswordInput);

/* --------------------------------------------------------- */

class PasswordInput2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
        };
    }

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { password } = this.state;

        return (
            <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={this.onChange}
            />
        );
    }
}

export default PasswordInput2;