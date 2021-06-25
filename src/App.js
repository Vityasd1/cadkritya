import React from "react";
import './App.css';
import {Header} from "./components/header/header";
import {About} from "./components/about/about";
import {Services} from "./components/services/services";
import {HowItWorks} from "./components/how-it-works/HowItWorks";
import {Contact} from "./components/contact/contact";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function App() {
    return (
        <>
            <ScrollToTop smooth style={{background: "#f27727"}} component={<ArrowUpwardIcon/>} />
            <Header/>
            <About />
            <Services/>
            <HowItWorks/>
            <Contact/>
        </>
    );
}

export default App;
