import React, {useEffect, useState} from 'react';
import itemEntriesApi from '../../api/itemEntriesApi';
import {Formik, Form, Field} from 'formik';
import './styles.css';
import '../../validation';
import * as Yup from 'yup';
import ErrorMessageTranslated from "../../components/ErrorMessageTranslated/ErrorMessageTranslated";
import { TextField } from 'formik-material-ui';
// import TextField from '@material-ui/core/TextField';
import { Button, Input } from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from '@material-ui/core/styles';
import {useHistory, useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useTranslation} from "react-i18next";
import * as yup from "yup";


const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > *': {
    //         margin: theme.spacing(1),
    //         width: theme.spacing(16),
    //         height: theme.spacing(16),
    //     },
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    // },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    // },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'left',
    //     color: theme.palette.text.secondary,
    // },
        root: {
            flexGrow: 1,
            display: 'flex',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),

        },
}));


export default () => {
    const history = useHistory();
    const { id } = useParams();

    const isValidCoordinates = require('is-valid-coordinates')

    const classes = useStyles();

    const {t, i18n} = useTranslation('item');

    // const [errorMessage, setErrorMessage] = useState();
    const createValidationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Required")
            .min(8, "Too Short")
            .max(33, "Too Long!"),
        seatMaterial: Yup.string()
            .required("Required"),
        handlebar: Yup.string()
            .required("Required"),
        paving: Yup.string()
            .required("Required"),
        description: Yup.string()
            .required("Required"),
        locationLat: Yup.number()
            .typeError('Must be a number')
            .required("Required")
            .test("valid-latitude", 'Coordinate is not correct', value => isValidCoordinates.latitude(parseFloat(value))),
        locationLng: Yup.string()
            .typeError('Must be a number')
            .required("Required")
            .test("valid-longitude", 'Coordinate is not correct', value => isValidCoordinates.longitude(parseFloat(value))),
    });


    const [file, setFile] = useState({});
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    const [initialState, setInitialState] = useState({
        title: '',
        seatMaterial: '',
        handlebar: '',
        paving: '',
        description: '',
        locationLat: '',
        locationLng: ''
    });

    useEffect(() => {
        if(id) {
            itemEntriesApi.fetchItemEntryById(id)
                .then(resp => setInitialState(resp.data));
        }
    }, [id])

    return (
        <div className={classes.root}>
            <Container className={classes.cardGrid}>
                <Grid container spacing={12}  justify="center">
                    <Grid item>
                        <Paper className={classes.paper}>
        <Formik
            enableReinitialize={true}
            initialValues={initialState}
            validationSchema={createValidationSchema}
            onSubmit={values => {
                if(id) {
                    itemEntriesApi.updateItemEntry(id, values, file).then(() => {
                        history.push(`/itemEntries/${id}`);
                    });
                } else {
                    itemEntriesApi.createItemEntry(values, file).then(function(resp){
                        history.push(`/itemEntries/${resp.data.id}`);
                    });
                }
            }}
        >
            {(props) => (
                 <Form id="item-entry-form">
                     <div>
                         <Field label={t("title")} name="title" type="text" component={TextField} style={{width: 300}}/>
                         {/*<ErrorMessageTranslated className="error" name="title"/>*/}
                     </div>
                     <div>
                         <Field
                             component={TextField}
                             type="text"
                             name="seatMaterial"
                             label={t("seat material")}
                             select
                             variant="standard"
                             style={{width: 300}}
                             margin="normal"
                             InputLabelProps={{
                                 shrink: true,
                             }}
                         >
                                     <MenuItem value={"WOOD"}>{t("wood")}</MenuItem>
                                     <MenuItem value={"PLASTIC"}>{t("plastic")}</MenuItem>
                                     <MenuItem value={"METAL"}>{t("metal")}</MenuItem>
                                     <MenuItem value={"OTHER"}>{t("other")}</MenuItem>
                         </Field>
                     </div>
                     <div>
                         <Field
                             component={TextField}
                             type="text"
                             name="handlebar"
                             label={t("handlebar")}
                             select
                             variant="standard"
                             style={{width: 300}}
                             margin="normal"
                             InputLabelProps={{
                                 shrink: true,
                             }}
                         >
                             <MenuItem value={"CHAIN"}>{t("chain")}</MenuItem>
                             <MenuItem value={"METAL_PIPE"}>{t("metal pipe")}</MenuItem>
                             <MenuItem value={"ROPE"}>{t("rope")}</MenuItem>
                             <MenuItem value={"OTHER"}>{t("other")}</MenuItem>
                         </Field>
                     </div>
                     <div>
                         <Field
                             component={TextField}
                             type="text"
                             name="paving"
                             label={t("paving")}
                             select
                             variant="standard"
                             style={{width: 300}}
                             margin="normal"
                             InputLabelProps={{
                                 shrink: true,
                             }}
                         >
                             <MenuItem value={"GRASS"}>{t("grass")}</MenuItem>
                             <MenuItem value={"CONCRETE"}>{t("concrete")}</MenuItem>
                             <MenuItem value={"SAND"}>{t("sand")}</MenuItem>
                             <MenuItem value={"TILES"}>{t("tiles")}</MenuItem>
                             <MenuItem value={"WATER"}>{t("water")}</MenuItem>
                             <MenuItem value={"OTHER"}>{t("other")}</MenuItem>
                         </Field>
                     </div>
                     <div>
                         <Field label={t("description")}
                                name="description"
                                type="text"
                                style={{width: 300}}
                                component={TextField}
                                multiline/>
                         {/*<ErrorMessageTranslated className="error" name="description"/>*/}
                     </div>
                     <div>
                         <Field label={t("location latitude")} name="locationLat" type="text" component={TextField} style={{width: 300}}/>
                         {/*<ErrorMessageTranslated className="error" name="locationLat"/>*/}
                     </div>
                     <div>
                         <Field label={t("location longitude")} name="locationLng" type="text" component={TextField} style={{width: 300}}/>
                         {/*<ErrorMessageTranslated className="error" name="locationLng"/>*/}
                     </div>

                     <div>
                         <Input type="file" label="Files" onChange={handleFileChange} />
                          {/*<Field name="files" type="file" onChange={handleFileChange}/>*/}
                     </div>
                     <div>
                         {id ? <Button variant="contained" color="primary" type="submit"> {t("update")} </Button>
                             : <Button variant="contained" color="primary" type="submit"> {t("create")} </Button>
                         }
                     </div>
                 </Form>
             )
             }
         </Formik>
            </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>

     )
 }
