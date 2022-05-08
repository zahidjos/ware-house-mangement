import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Service.fig';


const LogIn = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate=useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handelLogIn=async(event)=>{
    event.preventDefault();
    let email=event.target.email.value;
    let password=event.target.password.value;
   await signInWithEmailAndPassword(email,password);
   navigate(from, { replace: true });
        
}
    return (
        <div>
            <div className="container">
            <h1>Hi am login part</h1>
            <form onSubmit={handelLogIn}>
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
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <p>{error?error.message:""}</p>
</form>
            </div>
            
        </div>
    );
};

export default LogIn;