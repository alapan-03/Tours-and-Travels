import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import { useState } from 'react';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';
import Component7 from './Components/Component7';
import Footer from './Components/Footer';
import Comp1 from "./Components/Comp1";

import {createContext } from "react";
import AdditionalDetails from './Components/AdditionalDetails';
import Banner from './Components/Banner';

export const UserContext = createContext()
function App() {



  const [data, setData] = useState("");
  const [apiData, setApiData] = useState([]);
  const [dataId, setDataId] = useState("");

  
  function searchHand(e){
    setData(e);
  }

  function setApi(e){
    setApiData(e);
  }

  function setId(e){
    setDataId(e);
  }


  // console.log(dataId)

  return (
    <div className='app-cont'>
  


    <Component1 search={searchHand} apiData={apiData}/>
    <Component2 data={data} apiData={setApi} dataId={setId}/>
    <Banner/>
    <Component3 data={data} apiData={apiData}/>
    <Component4 apiData={apiData}/>
    <Component5/>
    <Component6/>
    <Component7/>
    <Footer/>



    </div>
  );
}

export default App;
