import React, {useContext} from "react";
import './Header.css'
import {useTranslation} from "react-i18next";
import {setCredentials} from "../../api";
import {UserContext} from "../../App";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";


import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";



const logo = require("../../img/swing_icon.jpg");

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    button:{
        alignContent: Button
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    languageButton: {
        cursor: "pointer",
    }
}));

export default () => {
    const history = useHistory();

    const {t, i18n} = useTranslation("common")
    const {user, logout, loggedIn} = useContext(UserContext)

    const changeLanguage = lang => e => {
        e.preventDefault()
        i18n.changeLanguage(lang)
    }

    const logoutClick = (e) => {
        e.preventDefault()
        setCredentials(null)
        logout()
    }

    const loginClick = (e) => {
        history.push('/login');
    }

    const goHome = () => {
        history.push('/');
    }

    const loggedInBlock = loggedIn() ?
        (
            <>
                <span>{t("greeting")} {user.userName}!</span>
                &nbsp;
                <Button color="inherit" onClick={logoutClick}>{t("logout")}</Button>
            </>
        ) :
            <Button color="inherit" onClick={loginClick}>{t("login")}</Button>

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge="start" className={classes.menuButton} onClick={goHome}>
                            <img width={50} src={logo} alt="" />
                    </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                        Geriausios supynės Lietuvoje
                    </Typography>

                    <div variant="h6" color="inherit" align="right" className={classes.contentRight}>
                        <Typography>
                            {loggedInBlock}
                        <span color="inherit" onClick={changeLanguage('lt')} className={classes.languageButton}>LT </span>
                             /
                            <span color="inherit" onClick={changeLanguage('en')} className={classes.languageButton}> EN</span>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>





    )
}
