import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import "../style/header.css";
import "../style/app.css";
import linkedin from "../style/linkedin.svg";

import { useState } from 'react';

export default function Header() {
    const [route, setRoute] = useState(0);

    const handleRouteChange = (newRoute) => {
        setRoute(newRoute);
    };

    return (
        <div className='header'>
            <div className='container header_container'>
                <div className='otter_logo'>
                    <FontAwesomeIcon icon={faOtter} className='otter' size="6x" color="rgb(101, 158, 232)" />
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/kateryna-stadnichenko-a1b80520b/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} className='linkedin_icon' alt="LinkedIn" />
                    </a>
                    {/* <Link to="/" onClick={() => handleRouteChange(0)}> CV </Link> */}
                </div>
            </div>
        </div>
    );
}