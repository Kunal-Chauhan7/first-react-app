import './App.css';
import ClassComponent from './components/ClassComponent'; // loading the component
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';

function App() {

  const [name,Setname] = useState("Kunal");
  const dadname = "Pardeep Kumar Chauhan"
  return (
  <div className="App">
    <h1>Class Component</h1>
    <ClassComponent/>
    <br/>
    <h1>Functional Component</h1>
    <FunctionalComponent  name={name}  ChangeName = {Setname} age = {20} FatherName = {dadname} Mothername = "Rekha devi"/>
  </div>
  //sending props to functional component 
  // we are using the component in the acnhor tag 
  // we can also use the component like <ClassComponent></ClassComponent> 
  );
}

export default App;
