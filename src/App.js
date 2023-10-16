import logo from './logo.svg';
import './App.css';
import {Simpsons} from "./components/Simpsons";

function App() {
  return (
    <div className="App">
      <Simpsons/>
    </div>
  );
}

export {App};


//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів