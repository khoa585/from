import React from 'react';
import InputField from "./InputField";

import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function OrderForm(props) {

    const schema = yup.object().shape({
        merchantId: yup.string().required('Không được để trống'),
        transactionRef: yup.string().required('Không được để trống'),
        transactionId: yup.string().required('Không được để trống'),
        orderId: yup.string().required('Không được để trống'),
        orderAmount: yup.string().required('Không được để trống'),
        orderCurrency: yup.string().required('Không được để trống'),
    });

    const orderForm = useForm({
        defaultValues: {
            merchantId: '',
            transactionRef: '',
            transactionId: '',
            orderId: '',
            orderAmount: '',
            orderCurrency: '',
            cardScheme: '',
        },
        resolver: yupResolver(schema),

    });

    const handleSubmit = (value) => {
         console.log("hehe ", value);
        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(value);
        }

    }

    return (
        <form onSubmit={orderForm.handleSubmit(handleSubmit)}>
            <h2>Màn hình Order</h2>
            <InputField name="merchantId" label="Marchant ID:*" form={orderForm}/>
            <InputField name="transactionRef" label="Transaction Ref:*" form={orderForm}/>
            <InputField name="transactionId" label="Transaction ID:*" form={orderForm}/>
            <InputField name="orderId" label="Order ID:*" form={orderForm}/>
            <InputField name="orderAmount" label="Order Amount:*" form={orderForm}/>
            <InputField name="orderCurrency" label="Order Currency:*" form={orderForm}/>
            <Button type="submit" variant="contained" color="primary">Thanh toán</Button>
        </form>

    );
}

export default OrderForm;
