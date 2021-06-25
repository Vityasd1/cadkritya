import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    white: {
        color: "white",
    },
    heading: {
        textAlign: "center",
        fontSize: '50px'
    },

    tsparticlesCanvasEl: {
        position: 'absolute',
        height: '70vh',
        width: '100%',
        // zIndex: 1,
    },
    hashLink: {
        textDecoration: "none",
        color: "inherit"
    }

}));