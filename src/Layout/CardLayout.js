import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function CardLayout(props) {
    const [data , setData] = useState()
    const state = useSelector(state => state);
    let {name} = props
var a = state.products;
var arr = []
console.log(a)
console.log("data",data)
if(a !== undefined){
     var b = a?.filter(e => e.id === name)
     for(var key in b[0]) {
            delete b[0].id
             arr.push({ ...b[0][key]})
             setData(arr)
            }  
    }
    console.log(name , arr)
    return (
        <div className='w-100 bg-light border-bottom pt-4'>
            <h1 className='text-center'>{props.name}</h1>
                <div className='w-100 card_container'>

            { data?.map((v,i)=>{
            return(
                <div key={i}>
                    <Card title='mughees' paragraph='muthees'/>
                </div>
                )
                    })}
                    </div>
            
        </div>
    )
}

export default CardLayout
