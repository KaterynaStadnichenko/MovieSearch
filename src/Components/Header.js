import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import "../style/header.css"

export default function Header() {
    return(
        <div className='header'>
            <div className='otter_logo'>
            <FontAwesomeIcon icon={faOtter} className='otter' size="6x" color="rgb(101, 158, 232)"/>
            <button className='button'>HOME PAGE</button>
            </div>
        </div>
    )
}