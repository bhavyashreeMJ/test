import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeNavBar from './Components/HomeNavbar';
import DataGrid from './Components/DataGrid';
import Navbar1 from "../src/Components/Navbar1";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
  <HomeNavBar></HomeNavBar>
  <Navbar1></Navbar1>
  <DataGrid></DataGrid>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
