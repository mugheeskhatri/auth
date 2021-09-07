import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Firebase from '../config/Firebase';
import googleBtn from '../assets/search.png';
import bg from '../assets/bgImg.png'
import { signInWithEmailAndPassword , getAuth  , sendPasswordResetEmail , confirmPasswordReset } from 'firebase/auth'
function Login(){
    const [forgot , setForgot] = useState(false)
    const [forgotEmail , setForgotEmail] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    let history = useHistory('/index')
    let auth = getAuth()
        //     const forgotPassword = (forgotEmail) => {
        // const actionCodeSettings = {
        //     url: `mughees-todo-app.firebaseapp.com/finishSignUp?${forgotEmail}`,
        //     handleCodeInApp: true
        //   };
        //    sendPasswordResetEmail(auth, forgotEmail, actionCodeSettings);
        //  // Obtain code from user.
        //    confirmPasswordReset(forgotEmail, code);
        // }
    let login = ()=> {
       let data = {
            email,
            password
        }
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
            console.log(res)
            history.push('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }


    const forget = ()=>{
        sendPasswordResetEmail(auth, forgotEmail)
        .then(() => {
          console.log('ok')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
        });
    }
      return(
           <div className='container-fluid main'>
                              <img className='background' src={bg} />

               <div className='col-md-8 shadow form-container'>
                <div className='col-md-6 p-4'>
    <h2 className='text-center'>LOGIN FORM</h2>
    <div className='form'>
<input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control p-2 mt-3"  placeholder="Enter email" />
<input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control p-2 mt-3 " placeholder="Enter password" />
<button onClick={login} className='login-btn p-1 mt-4'>Log In</button>
<div className='google p-1 mt-4'><img width='15px' height='15px' src={googleBtn} />  Continue with google</div>
    </div>
<div>
<a onClick={()=> setForgot(true)} className='create-btn'>Forgot Password?</a>
{forgot ? <div>
        <input onChange={(e)=> setForgotEmail(e.target.value)} type='email' placeholder='ENter email'/>
        <button onClick={forget}>Submit</button>
    </div>
:null}
</div>
<div>
<a className='create-btn' onClick={()=>history.push('/signup')}>Create new Account</a>

</div>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64PCNZxVHq2yVTjAPjKjSOODvNWXyPJRGBA&usqp=CAU" />
                </div>
               </div>
        </div>
    )
}

export default Login;