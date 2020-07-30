import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import itemEntriesApi from '../../api/itemEntriesApi'
import Pagination from '@material-ui/lab/Pagination';
import {CircularProgress} from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';
import {useTranslation} from "react-i18next";





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
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        overflow: 'hidden',
    },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ItemEntryList() {
    const classes = useStyles();


    const [itemEntriesPage, setItemEntriesPage] = useState({ content: [],});
    const [page, setPage] = useState(1);
    const cardsPerPage = 9;
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation("menu")


    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        itemEntriesApi.fetchItemEntriesPaginated(page - 1, cardsPerPage)
            .then(response => setItemEntriesPage(response.data))
            .finally(() => setIsLoading(false));
    }, [page])

    return (

        <React.Fragment>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Geriausios supynės Lietuvoje
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Sveiki atvykę į supynių paiešką Lietuvoje!
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" href="/itemEntriesMap">
                                        {t("view in map")}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Link to="/itemEntries#viewInList">
                                        <Button variant="outlined" color="primary">
                                            {t("view in list")}
                                        </Button>
                                    </Link>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" id="viewInList">
                        <Grid container spacing={4}>
                            {isLoading ?
                                <CircularProgress class="loader"/>
                            :
                            itemEntriesPage.content.map((itemEntry) => (
                                <Grid item key={itemEntry} xs={12} sm={6} md={4} >
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={"http://localhost:8081/files/" + itemEntry.fileName}
                                            title={itemEntry.title}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                {itemEntry.title}
                                            </Typography>
                                            <Typography noWrap>
                                                {itemEntry.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link to={`/ItemEntries/${itemEntry.id}`} >
                                                <Button variant="contained" size="small" color="primary" >
                                                    {t("see more")}
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                </Container>
                <div className={classes.root}>
                    <Pagination count={itemEntriesPage.totalPages} page={page} onChange={handleChange} />

                </div>
            </main>
        </React.Fragment>
    );
}