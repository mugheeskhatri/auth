import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import CardLayout from '../Layout/CardLayout';
import { useEffect } from 'react';
import { getDatabase , ref , onChildAdded , onValue } from 'firebase/database'
import { useSelector , useDispatch } from 'react-redux';
import {getAuth} from 'firebase/auth'
function Home() {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'products');
        onValue(starCountRef, (data) => {
            var arr = []
                for (var key in data.val()) {
                    arr.push({ ...data.val()[key], id: key })
                }
                console.log('arr',arr)
                dispatch({ type: "updateData", data : arr })
        });
    },[])
    return (
        <div>
            <Navbar />
            <Slider />
           <CardLayout name='Fashion'/>
           <CardLayout name='Electronics'/>
           <CardLayout name='Groccery'/>
           <CardLayout name='Food'/>
        </div>
    )
}

export default Home;
