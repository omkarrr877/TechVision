import React from 'react';
import web from "../src/images/artboard_2x.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business With" imgsrc={web} visit="/Service" btname="Get Started" />
        </>
    );
};

export default Home;