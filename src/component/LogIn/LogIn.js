import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Service.fig';
import './LogIn.css'


const LogIn = () => {
  const [
    signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);
  const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
  const navigate=useNavigate();
  let location = useLocation();
  const emailRef=useRef('')
  let from = location.state?.from?.pathname || "/";

  const handelLogIn=async(event)=>{
    event.preventDefault();
    let email=event.target.email.value;
    let password=event.target.password.value;
   await signInWithEmailAndPassword(email,password);
 
        
}
const handelPassword=async()=>{
  let passwordEmail=emailRef.current.value;
  await sendPasswordResetEmail(passwordEmail);
}
if(user){
  navigate(from, { replace: true });
}
    return (
        <div>
            <div className="container mt-5">
            <h1 className='text-center'> login part</h1>
            <div className='login_from'>
            <form onSubmit={handelLogIn}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" ref={emailRef} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <p>You have no account. <Link to='/registration'>please registration</Link> </p>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  
  
</form>
<button type="button" onClick={handelPassword} class="btn btn-secondary mt-3">Reset Password</button>
<p className='text-danger'>{error1?error1.message:""}</p>
<div className='text-center mt-5'>
<button type="button" class="btn btn-success m-auto" onClick={()=>signInWithGoogle()}>Google sign In</button>
</div>

</div>
            </div>
            
        </div>
    );
};

export default LogIn;