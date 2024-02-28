import { useState } from "react"
import search from "./../Assets/search.png"
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useReducer } from "react";


export default function Component1(props) {

    const [, forceUpdate] = useReducer(x => x + 1, 0)

    const cookies = new Cookies();

const [data, setData] = useState("")

function searchHandler(){
    let a = document.getElementsByClassName("search")[0].value

    props.search(a);

    // window.location.reload(false);
}
// console.log(data)

const userName = localStorage.getItem("userName")
// console.log(userName)

if(cookies.get('token')!=null){
    setTimeout(() => {
        document.getElementsByClassName("account")[0].style.display = "block";
        document.getElementsByClassName("login-btn")[0].style.display = "none";
    }, 100);
}
else{
    setTimeout(() => {
        document.getElementsByClassName("account")[0].style.display = "none";
        document.getElementsByClassName("acc-cont")[0].style.display = "none";
        document.getElementsByClassName("login-btn")[0].style.display = "block"
    }, 100);
}

function signOut(){
    cookies.remove("token", {path: "*"})
    let signOutMsg = document.getElementsByClassName("signout-msg-cont")[0]
    signOutMsg.style.transform = "translateY(-2rem)";
    signOutMsg.style.transition = "0.3s"
    signOutMsg.style.opacity = "1";

    setTimeout(() => {
        signOutMsg.style.transform = "translateY(-10rem)";
    signOutMsg.style.transition = "0.3s"
    signOutMsg.style.opacity = "0";
    // location.reload()
    }, 2000);

    forceUpdate()
}


    return(
        <>
        
<div className="section-2">
    <div className="navbar">
        <ul>
            <li>Passport</li>
            {/* <li><a href="home.html">Home</a></li>
            <li className="about-li">About Us</li>
            <li className="tours-li">Tours</li>
            <li className="contact-li"><a href="contact.html">Contact Us</a></li> */}

        </ul>

        <Link to="/login"><button className="login-btn">{userName===null || userName===undefined ? userName.substring(1,2) : `Login`}</button></Link>

    </div>

    <div className="acc-outer">
        <div className="acc-cont">
            <div className="signOut" onClick={signOut}>Sign Out</div>
            <Link to="/me"><div className="signOut">Account</div></Link>
            <button className="account">{userName && userName.substring(1,2)}</button>
        </div>
    </div>

    <div className="signout-msg-cont">
        <div className="signout-msg">Signed out successfully!</div>
    </div>

    <div className="s2-cont">
        <p className="s2-cont-p">It is Better to Travel Well Than to Arrive</p>
        <div className="searchBar">
            <input type="text" className="search" placeholder="Hey traveller, where do you want to go?"></input>
            <button onClick={searchHandler}><img src={search}/></button>
        </div>
    </div>
</div>

    </>
    )
}