import React from 'react'; 
import {useState} from 'react';// importing the useState Hook

//function FunctionalComponent (){
//    return(
//        <div>
//            <p>This is Functional Component</p>
//        </div>
//    );
//}

const FunctionalComponent = ()=>{
    // Here all the javaScript logic will be written before the return statement

    const[count,setCount] = useState(0);

    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count +1 ) }>Click here to add one</button>
            <h1>{count}</h1>
        </div>
    );
};

export default FunctionalComponent