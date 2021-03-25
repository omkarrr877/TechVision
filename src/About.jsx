import React from 'react';
import web from "../src/images/gcc_1.webp";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
   <Common name="Welcome To About Page" imgsrc={web} visit="/Contact" btname="Contact Now" />
        </>
    );
};

export default About;