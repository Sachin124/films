/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import '../sidebar/sidebar.css';
import LOGO from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import DASHBOARD from '../assets/dashboard.svg'
import FILM from '../assets/films.svg'
import FILMMAKER from '../assets/filmmakers.svg'

class SIDEBAR extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Dashboard",
                to: "/cms",
                className: "active_link",
                icon:DASHBOARD
            },
            {
                id: 2,
                name: "Film Submission",
                to: "/",
                className: "active_link",
                icon:FILM
            },
            {
                id: 3,
                name: "Filmmakers",
                to: "/cms",
                className: "active_link",
                icon:FILMMAKER
            }
        ],
        activeLink: 2
    };
    handleClick = id => {
        this.setState({ activeLink: id });
    };
    render() {
        const { links, activeLink } = this.state;
        return (
            <div className="bg-custom border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <img alt="logo" className="logo" src={LOGO} />
                </div>
                <div className="mt-4 list-group list-group-flush">
                    <p className="cm text-white">CONTENT</p>
                   
                    <div>
                        {links.map(link => {
                            return (
                                <div key={link.id}>
                                  <Link to="/"  onMouseEnter={() => this.handleClick(link.id)}
                                        className={'list-box list-group-item text-white ' +
                                            (link.id === activeLink ? link.className : "inactive_link")
                                        }>  
                    <img  alt={link+link.id} className="" src={link.icon} /> {link.name} {link.id === activeLink}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

};


export default SIDEBAR;