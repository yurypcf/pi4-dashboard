import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';

const Input = ({ label, name, value, type, onChange}) => (
    <div>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            name={name}
            onChange={onChange}
            type={type}
            value={value}
        />
    </div>
)

export default Input;