import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0) //initial value
  
  // function Increment (name){
  //   setCount(count+1)
  // }
  // function Decrement (){
  //   setCount(count-1)
  // }
  const Increment = ()=>{
    setCount(count+1)
  }
  const Decrement = ()=>{
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <button onClick={Increment}>+</button>
       {count}
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;
