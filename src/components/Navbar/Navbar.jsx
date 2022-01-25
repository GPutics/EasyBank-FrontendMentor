import React, {useState} from 'react';

// Routing
import { NavLink } from 'react-router-dom';

// Components
import Button from '../Button/Button';

// Styling
import './Navbar.scoped.scss';

// Assets
import logo from '../../assets/logo.svg';

const Navbar = ({open, setOpen}) => {

    return (
        <header className={"header " + (open ? "open" : "")}>
            
            <div className={"overlay has-fade " + (open ? "fade-in" : "")} />
            
            <nav className="flex flex-jc-sb flex-ai-c container container--pall">

                <NavLink to='/' className="header__logo">
                    <img src={logo} alt="easybank logo" />
                </NavLink>

                <div className={"header__hamburger-menu hide-for-desktop"} onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="header__links hide-for-mobile">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>

                <Button text="Request Invite" hideForMobile={true} />

            </nav>

            <div className={"header__menu " + (open ? "fade-in" : "has-fade")}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </div>
            
        </header>
    )
}

export default Navbar
