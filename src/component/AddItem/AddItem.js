import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Service.fig';
import './Additem.css'


const AddItem = () => {
    const [user,loading] = useAuthState(auth);
    console.log(user)
    const navigate=useNavigate();
    const handelAdd=(event)=>{
     event.preventDefault();
     const email=event.target.email.value;
     const name=event.target.name.value;
     const description=event.target.description.value;
     const price=event.target.price.value;
     const quantity=event.target.quantity.value;
     const supplier=event.target.supplier.value;
     const image=event.target.image.value;
    
     const truckData={
         name:name,
         description:description,
         price:price,
         quantity:quantity,
         supplier:supplier,
         image:image,
         email:email
     }
     fetch('https://sheltered-inlet-82200.herokuapp.com/service',{
         method:'POST',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(truckData)
     })
     .then(res=>res.json())
     .then(result=>console.log(result))
     navigate('/mangeItem');
  }
    return (
        <div>
            <div className="container mt-3">
                <h2 className='text-center'>ADD ITEM</h2>
                <div className='add_form'>
            <form onSubmit={handelAdd}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" value={user.email}  name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <input type="text" className="form-control" name="name" id="" placeholder='Enter Model Name' /> <br />
  <textarea name="description" className="form-control" id="" placeholder='Short Description' cols="30" rows="10"></textarea>
  <br />
  <input type="number" className="form-control" placeholder='price' name="price" id="" />
  <br />
  <input type="number" className="form-control" placeholder='Enter quantity' name="quantity" id="" />
  <br />
   <input type="text" className="form-control" placeholder='Supplier Name' name="supplier" id="" />
   <br />
   <input type="text" className="form-control" placeholder='Image Link' name="image" id="" />
   <br />
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
            </div>
        </div>
    );
};

export default AddItem;