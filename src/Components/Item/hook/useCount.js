import { useState } from "react";

const useCount = (initial=0, min, max) => {
    
    if(initial<min || min>max)initial=min;
    
    const [number, setNumberCount] = useState(initial);

    const resetNumber = () =>{
        setNumberCount(0)
    }
    const increment = () =>{
        if(number<max) setNumberCount(number + 1) //validacion de que no supere el stock disponible || se utiliza prev para sumarle 1 al numer previo, al anterior.
    }
    const decrement = () =>{
        if(number>min) setNumberCount(number - 1)
    }

    return {
        resetNumber,
        increment,
        decrement,
        number
    };
}

export default useCount;