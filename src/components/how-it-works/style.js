import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    title:{
        textAlign: "center",
        fontSize: '33px'
    },
    section:{
        marginTop: "3.7rem",
        // paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}))