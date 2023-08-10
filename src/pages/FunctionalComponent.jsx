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
    // we can destruture props and use them like variables
    //
    // const {name , age , ChangeName } = prpos;
    //
    //
    const [count,setCount] = useState(0);
    const [changedname , Changename] = useState("");

    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count +1 ) }>Click here to add one</button>
            <h1>{count}</h1>
            <h2>My name is {props.name} and I am {props.age} old and my Father name is {props.FatherName} and mother's name is {props.Mothername}</h2>
            <input onChange={(e)=>{Changename(e.target.value)}}></input>
            <button onClick={() => {props.ChangeName(changedname)}}>Change to Nick Name</button>
        </div>
    );
};

export default FunctionalComponent