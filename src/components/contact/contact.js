import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useStyle,theme} from "./style";
import Container from "@material-ui/core/Container";
import emailjs from 'emailjs-com';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import InputMask from "react-input-mask";
import classNames from "classnames";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export const Contact = (props) => {
    const classes = useStyle()

    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        setOpenError(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9zk7bpf', 'template_v1f0xdp', e.target, 'user_UjmOFSlktDIhZjgnFIoF0')
            .then((result) => {
                setOpenSuccess(true)
                document.getElementById("myForm").reset();
            }, (error) => {
                setOpenError(true)
                document.getElementById("myForm").reset();
            });
    }

    return (
        <section id={"contact"} className={classes.section}>
            <Container className={classes.whiteText}>
                <h1 className={classNames(classes.title,classes.center)}>Kapcsolat</h1>
                <p className={classes.center}>Bármilyen kérdésed van keress nyugodtan, rövid időn belül válaszolni fogok rá.</p>
                <Grid container className={classes.containerGrid}>
                    <Grid xs={12} sm={6}>
                        <form className={classes.form} id={"myForm"} onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number"  />
                            <ThemeProvider theme={theme} >
                                <div className={classes.formDiv}>
                                    <TextField id="outlined-basic" label="Email" type={"email"} required={true} variant="outlined" name={"email"} color={"secondary"} fullWidth />
                                </div>
                                <div className={classes.formDiv}>
                                    <TextField id="outlined-basic" label="Tárgy" required={true}  variant="outlined" color={"secondary"} name={"subject"} fullWidth/>
                                </div>
                                <div className={classes.formDiv}>
                                    <InputMask
                                        mask="(+36)99 999 99 99"
                                        // value={}
                                        disabled={false}
                                        maskChar=" "
                                    >
                                        {() =>
                                            <TextField id="outlined-basic" label="Telefonszám" name={"phone"}  variant="outlined" color={"secondary"} fullWidth/>
                                        }
                                    </InputMask>
                                </div>
                                <div className={classes.formDiv}>
                                    <TextField id="outlined-basic" label="Szöveg" name={"message"} multiline={true} rows={4} required={true} variant="outlined" color={"secondary"} fullWidth/>
                                </div>
                            </ThemeProvider>
                            <Box display="flex" justifyContent="flex-end"><Button type={"submit"} color={"secondary"}  variant={"contained"}>Küldés</Button></Box>
                        </form>
                    </Grid>

                    <Grid container xs={12} sm={6}>
                      <Grid container direction="row" spacing={1} justify={"space-between"} alignItems={"center"} className={classes.gridContact}>
                            <Grid item>
                                <LocationOnIcon fontSize={"large"} />
                            </Grid>
                            <Grid item>
                                Hungary
                            </Grid>
                      </Grid>
                      <Grid container direction="row" justify={"space-between"} className={classes.gridContact} spacing={1}>
                            <Grid item>
                              <MailOutlineIcon fontSize={"large"} />
                            </Grid>
                            <Grid item>
                                c4dforyou@gmail.com
                            </Grid>
                      </Grid>
                        <hr
                            style={{
                                color: "white",
                                height: 0,
                                width: "100%"
                            }}
                        />
                        <Grid container  xs={12} sm={12} direction="row" spacing={1} justify={"space-evenly"} className={classNames(classes.gridContact,classes.socialIcons)}>
                            <Grid  xs={3} sm={3}  item>
                                <FacebookIcon fontSize={"large"} />
                            </Grid>
                            <Grid  xs={3} sm={3} item>
                                <InstagramIcon fontSize={"large"} />
                            </Grid>
                            <Grid  xs={3} sm={3} item>
                                <LinkedInIcon fontSize={"large"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Email küldés sikeres!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Email küldés sikertelen
                </Alert>
            </Snackbar>
        </section>
    );
};


