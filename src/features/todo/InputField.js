import React from 'react';
import {TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";

function InputField(props) {

    const {form, name, label, disable} = props;
    const {errors, formState} = form;
    const hasError = formState.touched[name] && errors[name];
   // console.log("this is form: ", form);
     console.log(errors[name], formState.touched[name]);

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}
            label={label}
            disable={disable}
            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;
