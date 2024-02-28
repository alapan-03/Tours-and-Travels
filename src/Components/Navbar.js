import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

export default function navbar(second) {

    let cookies = new Cookies()
    const userName = cookies.get("userName")

    console.log(userName)

    return (
        <>
        <div className="navbar">
        <ul>
            <li>Passport</li>
            {/* <li><a href="home.html">Home</a></li>
            <li className="about-li">About Us</li>
            <li className="tours-li">Tours</li>
            <li className="contact-li"><a href="contact.html">Contact Us</a></li> */}

        </ul>

        <Link to="/login"><button className="login-btn">{userName!=null || userName!=undefined ? userName.substring(1,2) : `Login`}</button></Link>

    </div>
        </>
    )
}