import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Hidden, Container} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from "./style";
import Drawer from "@material-ui/core/Drawer";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Typed from 'react-typed'
import classNames from "classnames";
import Particles from "react-particles-js";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {HashLink} from "react-router-hash-link";

export const Header = (props) => {
    const accent = blueGrey[800];
    const classes = useStyles();
    const texts = ["professzinálisan.", "rövid határidővel."]
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClose = () => {
        setOpenDrawer(false)
    }
    return (
        <>

            <div className={classes.headerWrapper}>
                <Particles
                    className={classes.tsparticlesCanvasEl}
                    params={{
                        particles: {
                            number: {
                                value: 20,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            }
                        },
                        shape: {
                            enable: true,
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }}
                />
                <Container>
                    <AppBar position={"static"} elevation={0} color={"transparent"}>
                        <Toolbar className={classes.white}>

                            <Typography variant="h6" className={classes.title}>
                                CadKritya
                            </Typography>
                            <Hidden smDown>
                                <HashLink className={classes.hashLink} to={'/#about'} smooth>
                                    <Button className={classes.menuButton} color="inherit">Rólam</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#services'} smooth>
                                    <Button className={classes.menuButton} color="inherit">Szolgáltatások</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#how-it-works'} smooth>
                                    <Button className={classes.menuButton} color="inherit">Hogyan működik</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#contact'} smooth>
                                    <Button className={classes.menuButton} color="inherit">Kapcsolat</Button>
                                </HashLink>
                            </Hidden>
                            <Hidden mdUp>
                                <IconButton onClick={() => setOpenDrawer(true)} edge="start"
                                            // className={classes.menuButton}
                                            color="inherit" aria-label="menu">
                                    <MenuIcon/>
                                </IconButton>
                            </Hidden>
                            <Drawer transitionDuration={{enter: 800, exit: 300}} onClose={handleClose}
                                    anchor="top" open={openDrawer}>
                                <HashLink className={classes.hashLink} to={'/#about'} smooth>
                                    <Button className={classes.menuButton} onClick={ handleClose} color="inherit">Rólam</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#services'} smooth>
                                    <Button className={classes.menuButton} onClick={ handleClose} color="inherit">Szolgáltatások</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#how-it-works'} smooth>
                                    <Button className={classes.menuButton} onClick={ handleClose} color="inherit">Hogyan működik</Button>
                                </HashLink>
                                <HashLink className={classes.hashLink} to={'/#contact'} smooth>
                                    <Button className={classes.menuButton} onClick={ handleClose} color="inherit">Kapcsolat</Button>
                                </HashLink>
                            </Drawer>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <h1 className={classNames(classes.white, classes.heading)}>Cad tervezés <Typed typeSpeed={40}
                                                                                                       backSpeed={60}
                                                                                                       showCursor={false}
                                                                                                       className={"typed-text"}
                                                                                                       strings={texts}/>
                        </h1>
                    </div>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{minHeight: '30vh'}}
                    >

                        <Grid item xs={12}>
                            <HashLink to={"/#contact"} className={classes.hashLink} smooth>
                                <Button style={{height: '4rem'}} type={"submit"} color={"secondary"} variant={"contained"}>Kapcsolat felvétele</Button>
                            </HashLink>
                        </Grid>

                    </Grid>

                </Container>

            </div>
        </>
    );
};


