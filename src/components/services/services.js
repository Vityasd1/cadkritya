import React from 'react';
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import ChatSVG from "./chat.svg";
import DesignSVG from "./design.svg";
import PrinterSVG from "./printer.svg";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {useStyle} from "./style";
import classNames from "classnames";
import Zoom from 'react-reveal/Zoom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

export const Services = () => {
    const classes = useStyle()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <section id={"services"} className={classes.section}>
            <Container>
                <h1 className={classes.title}>Szolgáltatások</h1>
                <Grid container spacing={6} className={classes.containerGrid}>
                    <Grid item xs={12} sm={4}>
                        <Zoom left duration={matches ? 1000 : 0}>
                            <Card className={classNames(classes.card,classes.sideCard)}>
                                <CardContent className={classNames(classes.cardContent)}>
                                    <img src={ChatSVG} className={classNames(classes.cardImage)} alt={"Chat icon"}/>
                                    <h2>Tanácsadás</h2>
                                    <p>Elakadt, esetleg kérdése van valamivel kapcsolatban, vagy nem tudja pontosan mit szeretne?</p>
                                    <p>Keressen bizalommal</p>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Zoom bottom duration={matches ?1000 : 0}>
                            <Card className={classNames(classes.card,classes.centerCard)}>
                                <CardContent className={classNames(classes.cardContent)}>
                                    <img src={DesignSVG} className={classNames(classes.cardImage)} alt={"Design icon"}/>
                                    <h2>Tervezés</h2>
                                    <p>Van ötlete, de nem tudja megvalósítani?</p>
                                    <p>Cad tervezést vállalok, rövid határidővel. Amennyiben minőségi tervezőre van
                                        szüksége kérem vegye fel velem a kapcsolatot</p>
                                    <ArrowDownwardIcon fontSize={"large"} color={"white"}/>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Zoom right duration={matches ?1000 : 0} >
                            <Card className={classNames(classes.card,classes.sideCard)}>
                                <CardContent className={classNames(classes.cardContent)}>
                                    <img src={PrinterSVG} className={classNames(classes.cardImage)}
                                         alt={"Nyomtató icon"}/>
                                    <h2>Gyártás / Prototípus készítés</h2>
                                    <p>Kisebb projektetet prototípusokat van lehetőségem 3D nyomtatóval kinyomtatni</p>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};


