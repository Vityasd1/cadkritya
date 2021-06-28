import React, {useState} from 'react';
import {AppBar, Button, Container, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from "./style";
import Drawer from "@material-ui/core/Drawer";
import Typed from 'react-typed'
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import {HashLink} from "react-router-hash-link";
import Particles from "react-tsparticles";

export const Header = () => {
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
                    options={{
                        fpsLimit: 60,
                        particles: {
                            // canvas borders bounce factors
                            bounce: {
                                horizontal: {
                                    value: 1.01
                                },
                                vertical: {
                                    value: 1.01
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            collisions: {
                                enable: true,
                                // collisions bounce factors
                                bounce: {
                                    horizontal: {
                                        value: 1.5
                                    },
                                    vertical: {
                                        value: 1.5
                                    }
                                }
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 40
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        },
                        detectRetina: true
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


