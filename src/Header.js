import { useState } from 'react';

function NavLink({ name, linkTo }) {
    function jumpTo(sectionId) {
        const e = document.getElementById(sectionId);
        const top = e.getBoundingClientRect().top-90;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }

    return (
        <li className="nav-item" key={linkTo}>
            <p className="nav-link" onClick={() => jumpTo(linkTo)}>{name}</p>
        </li>
    );
}

export default function Header() {

    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
        <button className="navbar-toggler navbar-light ml-auto" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto">
            <NavLink name="About" linkTo="about" />
            <NavLink name="Projects" linkTo="projects" />
            <NavLink name="Contact" linkTo="contact" />
        </ul>
        </div>
        </nav>
        </>
    );
}
