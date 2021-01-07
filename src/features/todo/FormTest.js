import React from 'react';
import InputField from "./InputField";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

function FormTest(props) {

    const schema = yup.object().shape({
        title: yup.string().required('can nhap vao nhe'),
    });

    const form = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (value) => {

        // console.log("hehe ", value);
        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(value);
        }

    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h2>Form test</h2>
            <InputField name="title" label="todo" form={form}/>
        </form>
    );
}

export default FormTest;
