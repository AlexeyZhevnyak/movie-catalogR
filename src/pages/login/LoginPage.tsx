import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useLocation} from "react-router";
import {login, registration} from "../../hooks/hooks";
import * as yup from 'yup';
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/Store";
import {setUser} from "../../redux/Reducer";
import {User} from "../../model/user";


const defaultTheme = createTheme();
const validationSchema = yup.object({
    email: yup.string().email('Некорректный email').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
});

export default function LoginPage() {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let response;
            if (isLogin) {
                try {
                    response = await login(values.email, values.password);
                    dispatch(setUser(response as User));
                    navigate('/');
                } catch (e: any) {
                    console.log(e);
                }
                // console.log(response);
            } else {
                try {
                    response = await registration(values.email, values.password);
                    dispatch(setUser(response as User));
                    navigate('/');
                } catch (e: any) {
                    console.log(e);
                }
            }
        },
    });
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography
                        sx={{color: "#555555"}}
                        component="h1"
                        variant="h5"
                    >
                        {isLogin ? "Вход" : "Регистрация"}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{mt: 1}}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {isLogin ? (
                                    <Link href="/registration" variant="body2">
                                        {"Нет аккаунта? Зарегистрируйтесь"}
                                    </Link>
                                ) : (
                                    <Link href="/login" variant="body2">
                                        {"Есть аккаунт? Войдите!"}
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}