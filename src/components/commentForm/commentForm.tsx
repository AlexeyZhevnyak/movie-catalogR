import React from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";

const CommentForm = (props: {
    movieId: string
}) => {
    return (
        <Formik
            initialValues={{
                text: '',
                userId: '2',
                timestamp: Date.now(),
                movieId: props.movieId
            }}
            onSubmit={(values) => {
                axios.post('http://localhost:3000/comments/add', values)
                    .then(response => {
                        window.location.reload(); // перезагрузка страницы
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }}
        >
            {formik => (
                <Form>
                    <label htmlFor="text">Email Address</label>
                    <Field
                        id="text"
                        name="text"
                        placeholder={'Написать комментарий...'}
                        style={{resize: 'vertical'}}
                        component="textarea"
                        rows={3}
                    />

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default CommentForm;
