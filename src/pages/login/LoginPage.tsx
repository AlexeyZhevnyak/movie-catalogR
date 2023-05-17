import React from 'react';
import {useFormik} from 'formik';
import {Button, TextField} from "@mui/material";
import styles from './LoginPage.module.scss'

export const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.container}>
                <h2>Регистрация</h2>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    id={'email'}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}

                />
                <div className={styles.buttons}>
                    <Button type={'submit'} variant="contained">
                        Вход
                    </Button>
                    <Button variant="contained">
                        Регистрация
                    </Button>
                </div>
            </div>
        </form>
    );
};