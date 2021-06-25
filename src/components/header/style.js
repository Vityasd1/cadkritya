import { makeStyles } from '@material-ui/core/styles';
import Background from "./background-1.jpg";
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
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
    headerWrapper: {
    position: 'relative',
    background: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${Background})  no-repeat center`,
    backgroundSize: 'cover',
    height: '70vh',
    },
    tsparticlesCanvasEl: {
    position: 'absolute',
    height: '70vh',
    width: '100%',
    // zIndex: 1,
},
    hashLink: {
        textDecoration: "none",
        color: "inherit",
    }

}));