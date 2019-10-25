import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends Component {
  render() {
    const totalData = data.pets
    console.log(totalData.data)
    const petsData = totalData.find(data => data.title == 'Pets in Cambridge').data
    //const petsData = totalData.map(x => x.data)
    
    
   /* var petsData = {
      "cat": 55,
      "dog": 14,
      "lizard": 37,
      "elephant": 3
    }*/
    console.log(petsData)
    
    const petList = Object.keys(petsData).map(key => 
        <li key={key} value={key}> {petsData[key]} : {key}</li>
    )

    const dataUI = totalData.map((data) => 
    <div>
      <h1>{data.title}</h1>
      {petList}
    </div>)

    return (
      <div>
        <div>Hello World</div>
        <div className="App">
          <p>{dataUI}</p>
        </div>
      </div>
    );
  }
}

class ObjectJSON extends Component {
  
}

export default App;
