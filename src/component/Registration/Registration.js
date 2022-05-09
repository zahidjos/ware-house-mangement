import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Service.fig'
import './Registration.css'
const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);

    const handelRegistration=async(event)=>{
        event.preventDefault();
        let email=event.target.email.value;
        let password=event.target.password.value;
        
       await createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <div className="container mt-5">
            <h1 className='text-center'> Registration part</h1>
            <div className='registration_form'>
            <form onSubmit={handelRegistration}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
  <p>Already have account. <Link to='/logIn'>please go to Log In</Link> </p>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
<p>{error?error.message:""}</p>
<div className='text-center mt-5'>
<button type="button" class="btn btn-success m-auto" onClick={()=>signInWithGoogle()}>Google sign In</button>
</div>
</div>

            </div>
            
        </div>
    );
};

export default Registration;