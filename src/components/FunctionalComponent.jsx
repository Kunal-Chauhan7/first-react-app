import React from 'react'; 
import {useState} from 'react';// importing the useState Hook

//function FunctionalComponent (){
//    return(
//        <div>
//            <p>This is Functional Component</p>
//        </div>
//    );
//}

const FunctionalComponent = (props)=>{ //accesing Props using props
    // Here all the javaScript logic will be written before the return statement

    const[count,setCount] = useState(0);

    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count +1 ) }>Click here to add one</button>
            <h1>{count}</h1>
            <h2>My name is {props.name} and I am {props.age} old and my Father name is {props.FatherName} and mother's name is {props.Mothername}</h2>
            <button onClick={() => {props.ChangeName("Kanu")}}>Change to Nick Name</button>
        </div>
    );
};

export default FunctionalComponent