import React from 'react'
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <Typography
            label={label}
        />
    )
}
