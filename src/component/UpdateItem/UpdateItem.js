import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateItem.css'

const UpdateItem = () => {
    const params=useParams()
    const [updateData,setUpdateData]=useState([]);
    const{name,image,price,description,quantity,supplier,_id}= updateData;
    const [quantityData,setQuantityData]=useState(quantity);
    
 
     useEffect(()=>{
        let url=`https://sheltered-inlet-82200.herokuapp.com/service/${params.id}`;
        fetch(url)
        .then(res=>res.json())
        .then(truckData=>setUpdateData(truckData));
      },[quantityData])

     const handelDeliver=()=>{
     let number=quantity-1;

      const updateUser={number};
      fetch(`https://sheltered-inlet-82200.herokuapp.com/user/${_id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
         body:JSON.stringify(updateUser)
     })
     .then(res=>res.json())
     .then(data=>setQuantityData(number))
    
      }
  
  //  console.log(quantityData);
   const navigate=useNavigate()

   const handelStock=(id)=>{
    navigate(`/stockItem/${id}`);
   }
   
   
    return (
        <div>
            <div className="container">
            <div className="card w-75 m-auto mt-3" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p>Price:{price}</p>
    <p>Quantity:{quantity}</p>
    <h6>Supplier:{supplier}</h6>
    <div className='d-flex justify-content-between m-3'>
    <a  onClick={()=>handelStock(_id)} className="btn btn-primary">Stock</a>
    <a onClick={handelDeliver} className="btn btn-primary">Deliver</a>
    </div>
    

  </div>
</div>
            </div>
            
        </div>
    );
};

export default UpdateItem;