import React from 'react';
import {Grid, Container} from "@material-ui/core";
import {useStyles} from './style'
import Image from './image.jpg'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const About = (props) => {
    const classes = useStyles()

    return (
        <section id={"about"} className={classes.section}>
            <Container>
                <Grid container spacing={3} direction={"row"}  justify={"center"}>
                    <Grid item xs={12} sm={8}>
                        <h1 className={classes.title}>Rólam</h1>
                        <Box variant={"body"} lineHeight={2} >Németh Ildikó vagyok, angoltanár, gyakorlatias angoltanulás specialista.
                            A magyar emberek zöme azt gondolja, hogy nehéz megtanulni egy idegen nyelvet.
                            Tulajdonképpen igazuk is van, hiszen a megszokott, gyakran elavult és eredménytelen módszerekkel valóban nehézkes lehet.
                            Az elmúlt 20 év alatt, több országban több mint 15 féle nemzetiségű diákot tanítottam.
                            A többségüknek a legnagyobb problémát, az angol gondolkodásra és az angol nyelv logikájára való átállás jelentette.
                            Ezért dolgoztam ki a saját módszeremet, kifejezetten a magyar tanulók igényeihez igazítva és erre
                            építve írtam meg a Gyakorlatias Angol című könyvemet
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} container justify={"center"}>
                        <img className={classes.aboutImage} height={'300px'} src={Image} alt="Egy kép rólam"/>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};


