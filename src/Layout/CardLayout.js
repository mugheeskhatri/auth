import { set } from '@firebase/database';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function CardLayout(props) {
    const [data , setData] = useState()
    const [check , setCheck] = useState()
    const state = useSelector(state => state);
    var {name} = props
    var arr = []
    var a ;
    if(state.products) {
        a = state.products
        console.log(a)
    var b = a?.filter(e => e.id === name)  
    console.log(b)
    for(var key in b[0]) {
        arr.push({ ...b[0][key]})
        console.log(key)
        // setData(arr)              
        }
        }
     arr.pop()
     console.log(arr)
    return (
        <div className='w-100 bg-light border-bottom pt-4'>
            <h1 className='text-center'>{props.name}</h1>
                <div className='w-100 card_container'>

            { arr?.map((v,i)=>{
            return(
                    <Card key={i} title={v.brandName} imgSrc={v.storageUrl} paragraph={v.address}/>
                )
                    })}
                    </div>
            
        </div>
    )
}

export default CardLayout
