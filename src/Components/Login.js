
import { useEffect, useState} from "react";
import cookie from"js-cookie"
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";


export default function Login(props) {

  let navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [result, setResult] = useState(null);
  const [username, setUsername] = useState(null);
  const [postData, setPostData] = useState({
    email: "",
    password: "",
  });
  
  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };
  const handleInputChange2 = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };
  const handleInputChange3 = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };
  
  const handlePostRequest = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/v1/users/login', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      // if (!response.ok) {
      //   console.log(response)
      //   throw new Error('Network response was not ok');
      // }
      
      const result = await response.json();
      console.log(result);
      setToken(result.token)
      setResult(result);

      const cookies = new Cookies();
cookies.set('token', result.token, { path: '*' });
console.log(cookies.get('token')); 
      setUsername(result.name);
      
      
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
    localStorage.setItem("token", JSON.stringify(token))

  
  useEffect(()=>{
    localStorage.setItem("userName", JSON.stringify(username))
})


  setTimeout(() => {
    if(token)
    navigate('/')

    else{
      let loginMsg = document.getElementsByClassName("login-msg")[0];

      loginMsg.style.transform = "translateY(0rem)";
      loginMsg.style.transition = "0.3";
      loginMsg.style.opacity = "1";

      setTimeout(() => {
        loginMsg.style.transform = "translateY(-5rem)";
      loginMsg.style.transition = "0.3s";
      loginMsg.style.opacity = "0";
      }, 2000);
    }
  }, 1000);
      return(
        <>
        <div className="login">

          <p className="login-msg">{result?.message}</p>

          <div className="login-cont">
            <p>PASSPORT</p>
            <p>Please login to get full access</p>
            <input className="email"
            type="text"
            name="email"
            value={postData.email}
            onChange={handleInputChange} placeholder="Email"/>

            <input className="password" type="password" name="password" value={postData.password}
            onChange={handleInputChange2} placeholder="Password"/>

            <p>New to PASSPORT? <Link to="/signup"><span className="redirect">SignUp</span></Link></p>


            <button className="login-submit" onClick={handlePostRequest}>Submit</button>

            </div>
        </div>
        </>
    )
  }