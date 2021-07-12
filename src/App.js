// To push the source code to git repository run $git_Result in gitUpload.ps1 
// select $git_Result variable in gitUpload.ps1 and run.

import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Form from './component/Form';
import {Redirect, Route, Switch} from 'react-router-dom';
import Builder from './component/Builder'; 


function App() { 
  const [datas, setDatas] = useState();//state declaration 
  console.log (datas);

  return (
    <div className="App">
      <Header /> 
      
      <Switch>
        <Route path = '/' exact>
          <Form datas = {datas} setDatas = {setDatas}/>
        </Route>
        <Route path = '/builder' exact>
          {datas == undefined ? (<Redirect to ='/'/>):(<Builder d = {datas}/>)}
        </Route> 
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
