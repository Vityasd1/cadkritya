import {createMuiTheme, makeStyles} from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
    section:{
        paddingTop: "2rem",
        paddingBottom: "4rem",
        background: "#212121",
        // minHeight:'90vh'
    },
    containerGrid: {
        paddingTop: "2rem"
    },
    whiteText: {
        color: "white"
    },
    center: {
        textAlign: "center"
    },
    title: {
        fontSize: '33px'
    },
    formDiv: {
        marginBottom: "1rem"
    },
    form:{
        marginLeft:"3rem",
        marginRight:"3rem"
    },
    gridContact: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: "10rem",
            marginRight: "10rem",
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "2.7rem",
            marginRight: "2.7rem",
        },

    },
    socialIcons: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '-3.75rem'
        },

    }

}))

export const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});