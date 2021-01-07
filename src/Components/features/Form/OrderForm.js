import React from "react";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './style.css'
const OrderForm = () => {
    const [value, setValue] = React.useState('female');

    const RadiohandleChange = (event) => {
      setValue(event.target.value);
    };
    let validationSchemas = Yup.object({
        merchantId: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
        transactionRef: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
        transactionId: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
        orderId: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
        orderAmount: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
        orderCurrency: Yup.string().required('Vui lòng điền đầy đủ thông tin'),
    });

    return (
        <>
            <div className="container OrderForm">
                <Formik
                    initialValues={{
                        merchantId: '',
                        transactionRef: '',
                        transactionId: '',
                        orderId: '',
                        orderAmount: '',
                        orderCurrency: '',
                        cardScheme: '',
                    }}
                    validationSchema={validationSchemas}
                    onSubmit={async (values) => {
                        console.log(values)

                    }}
                >
                    {({
                        values,
                        errors,
                        handleBlur,
                        handleSubmit,
                        handleChange,
                        touched
                    }) => (
                        <form onSubmit={handleSubmit} className="wrappContainer">
                            <div >
                                <h2 className="title">Màn hình Order</h2>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="merchantId space">
                                        <TextField
                                            error={errors.merchantId && touched.merchantId ? true : false}
                                            id="merchantId"
                                            label="Tên *"
                                            size="small"
                                            value={values.merchantId}
                                            className={`${errors.merchantId && touched.merchantId ? "styleBoderSignUp" : ""}`}
                                            name="merchantId"
                                            variant="outlined"
                                            onChange={handleChange}
                                            helperText={`${errors.merchantId && touched.merchantId ? errors.merchantId : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="transactionRef space">
                                        <TextField
                                            error={errors.transactionRef && touched.transactionRef ? true : false}
                                            id="transactionRef"
                                            label="Họ *"
                                            size="small"
                                            name="transactionRef"
                                            value={values.transactionRef}
                                            variant="outlined"
                                            onChange={handleChange}
                                            className={`${errors.transactionRef && touched.transactionRef ? "styleBoderSignUp" : ""}`}
                                            helperText={`${errors.transactionRef && touched.transactionRef ? errors.transactionRef : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="transactionId space">
                                        <TextField
                                            error={errors.transactionId && touched.transactionId ? true : false}
                                            id="transactionId"
                                            label="transactionId *"
                                            name="transactionId"
                                            size="small"
                                            value={values.transactionId}
                                            variant="outlined"
                                            onChange={handleChange}
                                            className={`${errors.transactionId && touched.transactionId ? "styleBoderSignUp" : ""}`}

                                            helperText={`${errors.transactionId && touched.transactionId ? errors.transactionId : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="orderId space">
                                        <TextField
                                            error={errors.orderId && touched.orderId ? true : false}
                                            id="transactionId"
                                            label="Xác nhận"
                                            className={`${errors.orderId && touched.orderId ? "styleBoderSignUp" : ""}`}
                                            autoComplete="current-password"
                                            size="small"
                                            variant="outlined"
                                            name="orderId"
                                            onChange={handleChange}
                                            value={values.orderId}
                                            helperText={`${errors.orderId && touched.orderId ? errors.orderId : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="orderAmount space">
                                        <TextField
                                            error={errors.orderAmount && touched.orderAmount ? true : false}
                                            id="orderAmount"
                                            label="Xác nhận"
                                            className={`${errors.orderAmount && touched.orderAmount ? "styleBoderSignUp" : ""}`}
                                            autoComplete="current-password"
                                            variant="outlined"
                                            size="small"
                                            name="orderAmount"
                                            onChange={handleChange}
                                            value={values.orderAmount}
                                            helperText={`${errors.orderAmount && touched.orderAmount ? errors.orderAmount : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem">
                                    <label>merchantId</label>
                                    <div className="orderCurrency space">
                                        <TextField
                                            error={errors.orderCurrency && touched.orderCurrency ? true : false}
                                            id="orderAmount"
                                            label="Xác nhận"
                                            className={`${errors.orderCurrency && touched.orderCurrency ? "styleBoderSignUp" : ""}`}
                                            autoComplete="current-password"
                                            size="small"
                                            variant="outlined"
                                            name="orderCurrency"
                                            onChange={handleChange}
                                            value={values.orderCurrency}
                                            helperText={`${errors.orderCurrency && touched.orderCurrency ? errors.orderCurrency : ""}`}
                                        />
                                    </div>
                                </div>
                                <div className="wrappItem RadioForm">

                                    <label>merchantId</label>
                                    <RadioGroup aria-label="gender" name="gender1"  value={value} onChange={RadiohandleChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>

                                </div>
                                <div className="submitForm">
                                    <Button variant="contained" color="secondary" type="submit">Thanh toán</Button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default OrderForm;
