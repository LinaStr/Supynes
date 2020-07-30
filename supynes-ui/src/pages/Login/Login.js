import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import FormikState from "../../components/FormikState/FormikState";
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import userApi from "../../api/userApi";
import {useHistory, useLocation} from "react-router-dom"
import {Button} from '@material-ui/core'
import {TextField} from 'formik-material-ui'

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    username: '',
    password: ''
}

export default () => {
    const {login} = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()
    const classes = useStyles();

    const {from} = location.state || {from: {pathname: '/'}}

    const onSubmit = values => {
        setCredentials(values)

        userApi.getUser()
            .then(({data}) => {
                login(data)
                history.replace(from)
            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}>
                    {(props) => (
                        <Form className={classes.form} noValidate>
                            <div className={classes.paper}>
                                <Field name="username"
                                       type="text"
                                       component={TextField}
                                       id="outlined-basic"
                                       label="Username"
                                       variant="outlined"
                                       fullWidth

                                />
                            </div>
                            <div className={classes.submit}>
                                <Field
                                    name="password"
                                    type="password"
                                    component={TextField}
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    className={classes.submit}
                                >
                                    Login</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}
