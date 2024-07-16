import {useState} from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState("");

  //let counter = 6;
  const addValue = () => {
    // console.log("Button Clicked");
    counter = counter + 1;
    setMessage(""); 
    setCounter(counter);
    console.log(counter);
  };

  const removeValue = () => {
    //value not in negative
    if(counter <= 0){
      counter = 0;
      setMessage("Value can't be negative");
      
    }
    else{
  
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  }
  // const removeValue = () => {
  //   // console.log("Button Clicked");
  //   counter = counter - 1;
  //   setCounter(counter);
  //   console.log(counter);
  // }

  return (
    <>
      <h1>Abhishek</h1>
      <h2>counter Value : {counter}</h2>

      <button
        // onClick={() => {
        //   console.log("Button Clicked");
        // }
        // }
        onClick={addValue}
      >
        Add Value
      </button>
      <br />
      <p>testing : {counter}</p>
      <button onClick={removeValue}>Remove Value </button>
      <p>{message}</p>
      {/* {counter === 0 && <p>{message}</p>} */}
    </>
  );
}

export default App;
