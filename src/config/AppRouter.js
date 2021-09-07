import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from '../screen/Home';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Seller from '../screen/Seller';
import { getAuth } from '@firebase/auth';
import Not_Found from '../screen/404';
function AppRouter() {
    const auth = getAuth()

    const [user , setUser] = useState()

    useEffect(()=> {
        setUser(auth.currentUser)

    },[user])
    console.log(user)
    return (
        <Router>
                <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/seller" component={Seller} />

       </Switch>
        </Router>
    )
}

export default AppRouter
