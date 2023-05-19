import React, {useEffect, useState} from "react";
import {FormikValues, useFormik} from "formik";

const CommentForm = (props: {
    movieId: string;
    onSubmit: (values: any) => void | Promise<any>;
    email: string;
}) => {
    const [initialValues, setInitialValues] = useState({
        text: "",
        timestamp: Date.now(),
        email: "",
        movieId: props.movieId,
    });

    useEffect(() => {
        setInitialValues({
            text: "",
            timestamp: Date.now(),
            email: props.email,
            movieId: props.movieId,
        });
    }, [props.email]);

    const formik = useFormik({
        initialValues,
        onSubmit: props.onSubmit,
        enableReinitialize: true
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea
                id="text"
                placeholder="Написать комментарий..."
                style={{ resize: 'vertical' }}
                rows={3}
                value={formik.values.text}
                onChange={formik.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};



export default CommentForm;
