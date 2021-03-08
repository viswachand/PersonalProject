import React from 'react'

import { Typography } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, onChange, } = props;
    return (
        <Typography
            label={label}
        />
    )
}

