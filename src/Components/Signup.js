import { useState } from "react";
// import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";


export default function Signup(props) {

  let navigate = useNavigate();


    // let email = document.getElementsByClassName("email")[0]?.value;
    // let password = document.getElementsByClassName("password")[0]?.value;
    const [result, setResult] = useState(null);
    const [token, setToken] = useState(null);


    const [postData, setPostData] = useState({
        // Your POST data fields go here
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      const handleInputChange0 = (e) => {
        setPostData({
          ...postData,
          [e.target.name]: e.target.value
        });
      };

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
          const response = await fetch('http://127.0.0.1:4000/api/v1/users/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });
    
          // if (!response.ok) {
          //   throw new Error('Network response was not ok');
          // }
    
          // Handle the response data
          const result = await response.json();
          console.log(result);
          setToken(result.token)
          if(token)
          navigate('/login')

          // setResult(result);


          const cookies = new Cookies();
          cookies.set('token', result.token, { path: '*' });


          
  setTimeout(() => {
    if(token)
    navigate('/login')

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
  }, 2000);

        } catch (error) {
          console.error('Error making POST request:', error);
        }
    }

    return(
        <>
        <div className="signup">
          <div className="signup-cont">   

          <p className="login-msg">{result?.message}</p>

           <p>PASSPORT</p>
          <p>Please signup to get full access</p>         
            <input className="name"
            type="text"
            name="name"
            value={postData.name}
            onChange={handleInputChange0} placeholder="Name"/>

            <input className="email"
            type="email"
            name="email"
            value={postData.email}
            onChange={handleInputChange} placeholder="Email"/>

            <input className="password" type="password" name="password" value={postData.password}
            onChange={handleInputChange2} placeholder="Password"/>

            <input className="confirmPassword" type="password" name="confirmPassword" value={postData.confirmPassword}
            onChange={handleInputChange3} placeholder="Confirm Password"/>

<p>Already have an account? <Link to="/login"><span className="redirect">Login</span></Link></p>

            <button className="signup-submit" onClick={handlePostRequest}>Submit</button>

          </div>
        </div>

        </>
    )
}