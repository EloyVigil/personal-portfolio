import { Navbar } from "bootstrap";
import { useState, useEffect } from "react";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" className={scrolled ? "scrolled" : ""} >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={''} alt="My Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</a> ||
                    <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} > Skills</a> ||
                    <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} > Projects</a>
                    <span className="navbar-text" >
                        <div className="social-icon" >
                            <a href="#"><img src={''} alt="Icons" /></a>
                            <a href="#"><img src={''} alt="Icons" /></a>
                            <a href="#"><img src={''} alt="Icons" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
                    </span>
                </div>
            </div>
        </nav>
    )
}