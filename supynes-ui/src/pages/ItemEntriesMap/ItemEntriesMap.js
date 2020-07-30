import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from "../../components/Map/MapMarker";
import Grid from "@material-ui/core/Grid";
import itemEntriesApi from "../../api/itemEntriesApi";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";



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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default () => {
    const defaultCenter = {
        lat: 55.248688,
        lng: 23.948019
    };
    const zoom = 8;

    const [activeItemEntry, setItemEntry] = useState({});
    const [itemEntriesList, setItemEntriesList] = useState({content: [],});
    const [isSelected, setSelected] = useState(false);
    const {t} = useTranslation('item');
    const classes = useStyles();

    useEffect(() => {
        itemEntriesApi.fetchItemEntriesPaginated(0, 100)
            .then(response => setItemEntriesList(response.data))
        // .finally(() => setIsLoading(false));
    }, [])

    const onMarkerClick = (itemEntry, e) => {
        setItemEntry(itemEntry);
        setSelected(true)
    };

    const onMapClicked = (props) => {
        setItemEntry({});
        setSelected(false)
    };

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

    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    {isSelected ?
                    <div className={classes.root}>

                        <Typography>
                            {t("author")}: {activeItemEntry.user ? activeItemEntry.user.name : ""}
                        </Typography>

                        <Typography color={"textPrimary"}>
                            {activeItemEntry.title}
                        </Typography>

                        <Typography>
                            {t("seat material")}: {t(materials[activeItemEntry.seatMaterial])}
                        </Typography>
                        <Typography>
                            {t("handlebar")}: {t(materials[activeItemEntry.handlebar])}
                        </Typography>
                        <Typography>
                            {t("paving")}: {t(materials[activeItemEntry.paving])}
                        </Typography>
                        <Typography>
                            {t("coordinates")}: {activeItemEntry.locationLat}, {activeItemEntry.locationLng}
                        </Typography>

                    <Grid maxWidth="sm">
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
                                src={`http://localhost:8081/files/${activeItemEntry.fileName}`}
                                alt={t("photo not found")}
                            />
                        </div>
                        <Typography>
                            {activeItemEntry.description}
                        </Typography>

                    </Grid>
                            </div>
                        :
                        <Typography h3 color={"textPrimary"}>Norint peržiūrėti įrašą paspausk ant burbuliuko žemėlapyje</Typography>}
                </Paper>
            </Grid>
            <Grid item xs={9} style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyDb1Tl4ODl45oGx5e9-3eE14jfLxlVXAQ0',
                    }}
                    defaultCenter={defaultCenter}
                    defaultZoom={zoom}
                    onClick={onMapClicked}
                >
                    {
                        itemEntriesList.content.map((swing) => (
                            <MapMarker
                                lat={swing.locationLat}
                                lng={swing.locationLng}
                                text="My Marker2"
                                onClick={(e) => onMarkerClick(swing, e)}
                            />
                        ))
                    }
                </GoogleMapReact>
            </Grid>
        </Grid>
    );
}