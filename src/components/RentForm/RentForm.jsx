import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from "./RentForm.module.css";
import "./calendar.css"
import sprite from "../../sprite/sprite.svg"

function RentForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [isDatePickerOpen, setDatePickerIsOpen] = useState(false);

    const handleDateChange = date => {
        setStartDate(date);
        setDatePickerIsOpen(false);
    };

    const toggleDatePicker = () => {
        setDatePickerIsOpen(!isDatePickerOpen);
    };

    return (
        <div className={css.container}>
            <div className={css.blockRentInfo}>
                <h2 className={css.title}>Book your campervan now</h2>
                <p className={css.text}>Stay connected! We are always ready to help you.</p>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    bookingDate: '',
                    comment: '',
                }}
                onSubmit={(values) => {
                    values.bookingDate = startDate;
                    console.log(values);
                }}
            >
                <Form>
                    <div className={css.form}>
                        <div>
                            <Field className={css.input} type="text" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component="span" />
                        </div>
                        <div>
                            <Field className={css.input} type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="span" />
                        </div>
                        <div>
                            <Field className={css.input} name="bookingDate">
                                {({ field, form }) => (
                                    <div>
                                        <button className={css.btnInput} type="button" onClick={toggleDatePicker}>
                                            <svg className={css.svg} width="20" height="20">
                                                <use stroke='black' fill='white' href={`${sprite}#icon-Button`}></use>
                                            </svg>
                                        </button>
                                        {isDatePickerOpen && (
                                           <DatePicker
                                           dateFormat="dd/MM/yyyy"
                                           selected={startDate}
                                           onChange={date => {
                                               handleDateChange(date);
                                               form.setFieldValue(field.name, date);
                                           }}
                                           inline
                                           minDate={new Date()}
                                       />
                                       
                                        )}
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage name="bookingDate" component="span" />
                        </div>
                        <div>
                            <Field className={css.comment} type="text" name="comment" placeholder="Comment" />
                            <ErrorMessage name="comment" component="span" />
                        </div>
                    </div>
                    <button className={css.btn} type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    );
}

export default RentForm;
