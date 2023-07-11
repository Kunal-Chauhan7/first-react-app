import './App.css';
import ClassComponent from './components/ClassComponent'; // loading the component
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
  <div className="App">
    <h1>Class Component</h1>
    <ClassComponent/>
    <br/>
    <h1>Functional Component</h1>
    <FunctionalComponent/>
  </div>
  // we are using the component in the acnhor tag 
  // we can also use the component like <ClassComponent></ClassComponent> 
  );
}

export default App;
