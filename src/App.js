import logo from './logo.svg';
import './App.css';
import {User} from "./components/User";
import {Users} from "./components/Users";

const App = () => {

  return (
      <div className="App">
          <Users/>
      </div>
  );
}
//we add what we want to see in web page

export  {App};

//{App} бо Export може передавати декілька значень,
// коли їх декілька - ти вказуєш їх як обʼєктом.
// Якщо в тебе компонента повертає лише це, то можна написати export default
// і тоді дужок не треба.