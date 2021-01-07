import React from 'react';

import {Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";


function InputField(props) {

    const {form, name, label, disable} = props;
    const {errors, formState} = form;
    const hasError = formState.touched[name] && errors[name];

    //console.log(label)
    return (
        <div>
            <label>{label}</label>
            <Controller
                name={name}
                control={form.control}
                as={TextField}
                variant="outlined"
                disable={disable}
                error={!!hasError}
                helperText={errors[name]?.message}
            />
        </div>

    );
}

export default InputField;
