import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = (props) => {
    
    const {name,image,price,description,quantity,supplier,_id}=props.truckData;
    const navigate=useNavigate()
    const handelUpdate=(id)=>{
       navigate(`/update/${id}`);
    }
    return (
        <div className='col-lg-4 mb-3'>
            <div className="card" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p>Price:{price}</p>
    <p>Quantity:{quantity}</p>
    <h6>Supplier:{supplier}</h6>
    <a onClick={()=>handelUpdate(_id)} className="btn btn-primary">Stock Update</a>
  </div>
</div>
        </div>
    );
};

export default Card;