import Navbar from "@/Components/Navbar";
import {useState} from "react";
import Hero from "@/Components/Hero";
import Skills from "@/Components/Skills";
import Portfolio from "@/Components/Portfolio";
import Experience from "@/Components/Experience";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

const Welcome = () => {

    return (
        <>
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        </>
    )
}

export default Welcome;
