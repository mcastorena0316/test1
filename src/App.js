import React from 'react';
import './App.css';

function App() {

  const arrayDivs = Array.from(Array(100).keys())

  function resultMod(index){
   if (index+1%5===0) {
     return 'white'
   } else if ((index+1)%5===1) {
     return 'red'
   } else if( (index+1)%5=== 2) {
     return 'green'
   } else if((index+1)%5===3) {
     return 'blue'
   } else if ((index+1)%5===4) {
     return 'black';
   }
  }
  return (
    <div className="App">
      {arrayDivs.map((divNumber,index) => <div 
      style={{
        backgroundColor: resultMod(index),
        textAlign: 'left'
        }}
      key={index+1}
        >{index+1}</div>)}
   
    </div>
  );
}

export default App;
