import React from 'react';
import { Component, useState } from 'react';
import MyDatepickerComponent from './components/MyDatepickerComponent';
import Timer  from './components/Timer';

const App = () => {

const [endDate, setEndDate] = useState(new Date());
const now = new Date();

    const handleChange = e => {

      switch(e.target.value) {
          case '1':
              this.changeBackground('retireback1');
              break;
          case '2':
            this.changeBackground('retireback5');         
              break;
          case '3':
            this.changeBackground('retireback6');
              break;
          case '4':
            this.changeBackground('retireback7');
              break;
          case '5':
            this.changeBackground('retireback12');
              break;
          case '6':
            this.changeBackground('retireback9');
              break;
          case '7':
            this.changeBackground('retirebnack3');
              break;
              case '8':
            this.changeBackground('retireback8');
              break;
              case '9 ':
                this.changeBackground('retireback13');
                  break;
          default:
            console.log("error");
      }

    };

    const changeBackground = (bg) => {
      document.getElementById("mainback").style.backgroundImage = "url(http://localhost:3000/" + bg + ".png)";
    };

    return (
        <div className="mainback" id="mainback" style={{backgroundImage: `url("http://localhost:3000/retireback1.png")`}}>
          <h1>{ endDate.getTime() }</h1>
        <div className="radio-buttons">
         <h3>Select a background</h3>
          <input
            value="1"
            name="platform"
            type="radio"
            
            onChange={handleChange} />
          <input
            value="2"
            name="platform"
            type="radio"
            onChange={handleChange} />
          <input
            value="3"
            name="platform"
            type="radio"
            onChange={handleChange}/>
          <input
           value="4"
           name="platform"
           type="radio"
           onChange={handleChange}/>
          <input
           value="5"
           name="platform"
           type="radio"
           onChange={handleChange}/>
          <input
           value="6"
           name="platform"
           type="radio"
           onChange={handleChange}/>
          <input
           value="7"
           name="platform"
           type="radio"
           onChange={handleChange}/>
          <input
           value="8"
           name="platform"
           type="radio"
           onChange={handleChange}/>
            <input
           value="9"
           name="platform"
           type="radio"
           onChange={handleChange}/>
      </div>
        <div className="xxx">
          <h3>Change to your retirement date:</h3>
          <MyDatepickerComponent setEndDate={ setEndDate } endDate={ endDate } now={ now }/>
        </div>

       <div className="container" >
        <h1 className="header">
          Happy Retirement in
        </h1>
        <Timer endDate={ endDate } now={ now }/>
      </div>
 

        </div>
      );
    }
  export default App;
 