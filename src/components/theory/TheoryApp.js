import React, {useState} from 'react';
import Counter from "./Counter";
import ShowCounter from "./ShowCounter";

function TheoryApp() {
    const [isShow, setShow] = useState(false);
    const [counter, setCounter] = useState(0);
    return (
        <div>
            {isShow ? <Counter/> : <ShowCounter counter={counter} />}
            <button onClick={() => {
                setShow(isShow => !isShow);
            }}>Show?
            </button>
            <button onClick={()=>{
                setCounter(counter => counter+1)
            }}>Counter++</button>
        </div>
    );
}

export default TheoryApp;