import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/first-component/FirstComponent";

function App() {
  return (
    <div className="App">
      <FirstComponent
          txt={'Bart'}
          image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
      <FirstComponent
          txt={'Homer'}
          image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
    </div>
  );
}

export default App;
