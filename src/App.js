import './App.css';
import ClassComponent from './pages/ClassComponent'; // loading the component
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from 'react';
import { Route , Routes } from 'react-router-dom';

function App() {

  const [name,Setname] = useState("Kunal");
  const dadname = "Pardeep Kumar Chauhan"
  return (
    <Routes>
      <Route path='/' element = {<ClassComponent />} />
      <Route path='/functionalComponent' element = {<FunctionalComponent name={name}  ChangeName = {Setname} age = {20} FatherName = {dadname} Mothername = "Rekha devi"/>} />
    </Routes>
  //sending props to functional component 
  // we are using the component in the acnhor tag 
  // we can also use the component like <ClassComponent></ClassComponent> 
  );
}

//<div className="App">
//    <h1>Class Component</h1>
//    <ClassComponent/>
//    <br/>
//    <h1>Functional Component</h1>
//    <FunctionalComponent  name={name}  ChangeName = {Setname} age = {20} FatherName = {dadname} Mothername = "Rekha devi"/>
//  </div>



export default App;
