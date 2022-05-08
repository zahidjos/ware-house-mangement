import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Service.fig'
const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handelRegistration=async(event)=>{
        event.preventDefault();
        let email=event.target.email.value;
        let password=event.target.password.value;
        
       await createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <div className="container">
            <h1>Hi am registration part</h1>
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
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
<p>{error?error.message:""}</p>

            </div>
            
        </div>
    );
};

export default Registration;