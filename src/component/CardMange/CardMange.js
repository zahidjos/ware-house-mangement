import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseHook from '../UseHook/UseHook';

const CardMange = (props) => {

    const {name,image,price,description,quantity,supplier,_id}=props.truckData;
    const navigate=useNavigate()
    const handelUpdate=(id)=>{
       navigate(`/update/${id}`);
    }
    const [data,setData]=UseHook()

    const handelDelete= async(id)=>{
        const url=`https://sheltered-inlet-82200.herokuapp.com/delete/${id}`
       await fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(resdata=>{
            const remaining=data.filter(singleData=>singleData._id!==id);
            setData(remaining);
        })

        
       


    }
    return (
        
            <div className='col-lg-4'>
            <div className="card" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p>Price:{price}</p>
    <p>Quantity:{quantity}</p>
    <h6>Supplier:{supplier}</h6>
    <a onClick={()=>handelUpdate(_id)} className="btn btn-primary">Stock Update</a>
    <a onClick={()=>handelDelete(_id)} className="btn btn-primary">Delete Item</a>
    
    

  </div>
</div>
        </div>
        
    );
};

export default CardMange;