import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import itemEntriesApi from "../../api/itemEntriesApi";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {HashLink as Link} from "react-router-hash-link";
import CardActions from "@material-ui/core/CardActions";
import {useHistory} from "react-router-dom";
import i18next from 'i18next'
import {useTranslation} from "react-i18next";
import Secured from "../../components/Secured/Secured";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    const {id} = useParams();
    const [itemEntry, setItemEntry] = useState({});
    const classes = useStyles();
    const history = useHistory();
    const {t} = useTranslation('item');


    useEffect(() => {
        itemEntriesApi.fetchItemEntryById(id)
            .then(resp => setItemEntry(resp.data));
    }, [id])

    const materials = {
        WOOD: "wood",
        PLASTIC: "plastic",
        METAL: "metal",
        CHAIN: "chain",
        METAL_PIPE: "metal pipe",
        ROPE: "rope",
        GRASS: "grass",
        CONCRETE: "concrete",
        SAND: "sand",
        TILES: "tiles",
        WATER: "water",
        OTHER: "other",
    }

    // t(materials[tasKintamasis])

    function deleteEntry() {
        itemEntriesApi.deleteById(itemEntry.id).then(() => {
            history.push('/');
        });

    }

    return (
        <div className={classes.root}>
            <Container className={classes.cardGrid}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.root}>
                                <Typography>
                                    {t("author")}: {itemEntry.user ? itemEntry.user.name : ""}
                                </Typography>

                                <Typography color={"textPrimary"}>
                                    {itemEntry.title}
                                </Typography>

                                <Typography>
                                    {t("seat material")}: {t(materials[itemEntry.seatMaterial])}
                                </Typography>
                                <Typography>
                                    {t("handlebar")}: {t(materials[itemEntry.handlebar])}
                                </Typography>
                                <Typography>
                                    {t("paving")}: {t(materials[itemEntry.paving])}
                                </Typography>
                                <Typography>
                                    {t("coordinates")}: {itemEntry.locationLat}, {itemEntry.locationLng}
                                </Typography>
                                <Typography>
                                    {itemEntry.description}
                                </Typography>

                            </div>
                        </Paper>
                        <Secured>

                            <Button variant="contained" size="small" color="primary" onClick={deleteEntry}>
                                {t("delete")}
                            </Button>
                            <Link to={`/itemEntries/${itemEntry.id}/edit`}>
                                <Button variant="contained" size="small" color="primary">
                                    {t("edit")}
                                </Button>
                            </Link>
                        </Secured>
                    </Grid>
                    <Grid item xs={8}>
                        <Card style={{maxWidth: 800}}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItem: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <CardMedia
                                    style={{
                                        maxWidth: "400px",
                                        maxHeight: "800px",
                                        padding: 5,
                                    }}
                                    component="img"
                                    src={`http://localhost:8081/files/${itemEntry.fileName}`}
                                    alt={t("photo not found")}
                                />
                            </div>
                        </Card>

                    </Grid>
                </Grid>
            </Container>
        </div>


    );
}
