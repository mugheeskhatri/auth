import React, {
    useContext
} from "react";
import {carName,carPrice} from './CompA'





function Car() {
    const image = useContext(carName)
    const priceCar = useContext(carPrice)

    return (
         <div className='App'>
                <img style={{width:"30%",height:150}} src={image}></img>
                <h1>{priceCar}</h1>
        </div>
    )
}

export default Car;