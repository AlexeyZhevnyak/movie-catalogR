import React from 'react';
import {Field, FieldArray, Form, Formik} from 'formik';
import {Button, Chip, TextField} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";

interface Values {
    review: string;
    rating: number;
    tags: string[];
    userId: string,
    movieId: string
}

interface Props {
    movieTitle: string;
    movieYear: number;
    moviePosterUrl: string;
    movieId: string
}

const ReviewPage: React.FC<Props> = ({movieTitle, movieYear, moviePosterUrl, movieId}) => {
    return (
        <Formik
            initialValues={{review: '', rating: 0, tags: [] as string[], userId: '2', timestamp: Date.now(), movieId: movieId}}
            onSubmit={(values: Values) => {
                axios.post('http://localhost:3000/reviews/add', values)
                    .then(response => {
                        window.location.reload(); // перезагрузка страницы
                    })
                    .catch(error => {
                        console.log(error);
                    });
                console.log(values);
            }}
        >
            {({values, submitForm}) => (
                <Form>
                    <img src={moviePosterUrl} alt={`${movieTitle} (${movieYear})`}/>
                    <h2>{`${movieTitle} (${movieYear})`}</h2>
                    <Field
                        component={TextField}
                        name="review"
                        type="text"
                        placeholder="Напишите свою рецензию"
                        multiline
                        rows={4}
                        inputProps={{
                            style: {color: 'white'},
                        }}
                    />
                    <br/>
                    <Field
                        component={TextField}
                        name="rating"
                        type="number"
                        label="Оцените фильм"
                        inputProps={{min: 0, max: 10, style: {color: 'white'},}}
                    />
                    <br/>
                    <FieldArray
                        name="tags"
                        render={arrayHelpers => (
                            <>
                                <Field
                                    component={TextField}
                                    name="tagInput"
                                    type="text"
                                    placeholder={
                                        values.tags.length === 0 ? 'Добавьте тэги (через пробел)' : ''
                                    }
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                        if (e.key === ' ') {
                                            e.preventDefault();
                                            const newTags = (e.target as HTMLInputElement).value.split(' ');
                                            newTags.forEach(tag => {
                                                if (!values.tags.includes(tag)) {
                                                    arrayHelpers.push(tag);
                                                }
                                            });
                                            (e.target as HTMLInputElement).value = '';
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: values.tags.map((tag, index) => (
                                            <Chip
                                                key={index}
                                                label={tag}
                                                onDelete={() => arrayHelpers.remove(index)}
                                            />
                                        )),
                                    }}
                                    inputProps={{
                                        style: {color: 'white'},
                                    }}
                                />
                            </>
                        )}
                    />
                    <br/>
                    <Button variant="contained" color="primary" onClick={submitForm}>
                        Отправить
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ReviewPage;