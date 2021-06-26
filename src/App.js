import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Form from './component/Form';
import {Route, Switch} from 'react-router-dom';
import Builder from './component/Builder';


function App() {

  const [datas, setDatas] = useState({});

  return (
    <div className="App">
      <Header /> 
      <Switch>
        <Route path = '/' exact>
          <Form datas = {datas} setDatas = {setDatas}/>
        </Route>
        <Route path = '/builder' exact>
          <Builder d = {datas}/>
        </Route> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
