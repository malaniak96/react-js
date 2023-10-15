import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  //const [users, setUsers] = useState([]);
  //users = [] getter info
  //setUsers([........]) setter info
  //hook useState
  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(value => value.json())
  //     .then(value => {
  //console.log('asd'); shows many times
  //      setUsers(value);
  //       //запускає рендер
  //     });

  //always use useEffect
  //useState use for async or on click
  // useEffect( ()=> {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(value => value.json())
  //       .then(value => {
  //         console.log('asd');
  //        setUsers(value);
  //       });
  // }, []);
  //
  let [counter, setCounter] = useState(0);
  let onClickIncrement = () => {
    counter++;
    setCounter(counter);
    console.log(counter)
  };
  let onClickDecrement = () => {
    counter--;
    setCounter(counter);
    console.log(counter);
  };

  return (
    <div className="App">

          <h1>counter: {counter}</h1>
          <button onClick={onClickIncrement}>+</button>
          <button onClick={onClickDecrement}>-</button>

    </div>
  );
}
//{users.map(value => <div> {value.name}</div>)}

export default App;
