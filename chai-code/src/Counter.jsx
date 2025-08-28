import { useState } from "react";

// export default function App() {}

function Counter() {
    const [counter,setCounter]=useState(0)  //! usestate is used to propagate the changes in the ui, the setCounter is a method that updates the counter variable, we don't need to target each element it get's updted directly
    // let counter=5;
    return(
        <>
        {/* this is counter */}
        <h1 className="" >Chai or React</h1>
        <h2>Counter value: {counter}</h2>
        <button className="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden "onClick={()=>{
            // counter++
            setCounter(counter+1)  //* this will analyze the complete dom and updates the complete ui whereever counter is present
            console.log(counter)
        }
            }>Increase value:{counter}</button>
        <br />
        <br />
        <button className="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden " onClick={()=>{
            // counter--
            if(counter>0){
                setCounter(counter-1)
            }
            
            console.log(counter)
        }}>Reduce value {counter}</button>
        <br />
        <br />
        <button className="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:ring-3" onClick={()=>{
            // counter--
            setCounter(0)
            console.log(counter)
        }}>Reset value</button>
        </>
    )
}

export default Counter;