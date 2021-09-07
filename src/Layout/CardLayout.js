import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function CardLayout(props) {
    const [data , setData] = useState()
    const state = useSelector(state => state);
    let {name} = props
    if(state.products){
  var obj = Object.keys(state?.products)
}
state.key=obj
// var a = obj?.filter(e => e === name)
// console.log(a)


//  console.log(state?.products?.obj)
//  console.log(state?.products?.Fashion)
 var a = state.products
 console.log(a)

 
 
 var arr = []
            for (var key in a) {
                arr.push({ ...a[key], id: key })
            }
            // console.log(arr)
    return (
        <div className='w-100 bg-light border-bottom pt-4'>
            <h1 className='text-center'>{props.name}</h1>
                <div className='w-100 card_container'>

            {/* {arr?.map((v,i)=>{
            return( */}
                        <Card title='bilal the good boy' paragraph='karachi'/>
                        <Card title='bilal the good boy' paragraph='karachi'/>
                        <Card title='bilal the good boy' paragraph='karachi'/>
                        <Card title='bilal the good boy' paragraph='karachi'/>
                        <Card title='bilal the good boy' paragraph='karachi'/>
                        {/* )
                    })} */}
                    </div>
            
        </div>
    )
}

export default CardLayout
