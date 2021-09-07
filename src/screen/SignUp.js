import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import database from '../config/Firebase';
import bg from '../assets/bgImg.png'
import 'firebase/auth';
import {createUserWithEmailAndPassword , getAuth} from 'firebase/auth'
import {getDatabase , ref , push, set } from 'firebase/database'

function SignUp(){
    let auth = getAuth()
    let db = getDatabase()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [name , setName] = useState()
    let history = useHistory('/index')
    let login = ()=> {
       let data = {
            email,
            password,
            name
        }
        createUserWithEmailAndPassword(auth , data.email,data.password).then((res)=>{
            console.log(res)
            set(ref(db,'users/'+ res.user.uid),data)
            history.push('/')
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
      return(
           <div className='container-fluid main'>
               <img className='background' src={bg} />
               <div className='col-md-8 form-container'>
                <div className='col-md-6 p-4'>
    <h2 className='text-center'>SignUp FORM</h2>
    <div className='form'>
<input value={name} onChange={(e)=> setName(e.target.value)} type="email" className="form-control p-2 mt-3" id="exampleInputPassword1" placeholder="Enter Name" />
<input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control p-2 mt-3" id="exampleInputPassword1" placeholder="Enter email" />
<input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control p-2 mt-3 " id="exampleInputPassword1" placeholder="Enter password" />
<button onClick={login} className='login-btn p-1 mt-4'>Sign Up</button>
    </div>
<a className='create-btn' onClick={()=>history.push('/login')}>Log In</a>

                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64PCNZxVHq2yVTjAPjKjSOODvNWXyPJRGBA&usqp=CAU" />
                </div>
               </div>
        </div>
    )
}

export default SignUp;