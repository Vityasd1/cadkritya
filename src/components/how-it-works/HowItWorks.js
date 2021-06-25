import React from 'react';
import Container from "@material-ui/core/Container";
import {useStyles} from "./style";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CreateIcon from '@material-ui/icons/Create';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import green from "@material-ui/core/colors/green";
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

export const HowItWorks = (props) => {
    const colorGreen = green[800]
    const classes = useStyles()
    return (
        <section id={"how-it-works"} className={classes.section}>
            <Container>
                <h1 className={classes.title}>Hogyan működik</h1>
                <Timeline style={{paddingTop:'2rem'}} align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "orange"}}>
                                <ContactMailIcon fontSize={"large"} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Kapcsolat kialakítása
                                </Typography>
                                <Typography>Az elérhetőségeim egyikén felveszed velem a kapcsolatot, ahol megbeszéljük mire van szükséged.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <CreateIcon fontSize={"large"} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Terv/Prototípus elkészítése
                                </Typography>
                                <Typography>A megbeszélések alapján rövid határidőn belül elkészítem neked a kért munkát.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot >
                                <PausePresentationIcon fontSize={"large"} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Jóváhagyás
                                </Typography>
                                <Typography>Megmutatom neked az elkészült munkát, ilyenkor van lehetőség tökéletesre csiszolni a terméket.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <MarkunreadMailboxIcon fontSize={"large"} />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Küldés
                                </Typography>
                                <Typography>Amennyiben elégedett vagy az eredménnyel már küldöm is!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </section>
    );
};


