import React from 'react';

const ItemCard = (props) => {
    const{name,description,price,quantity,supplier,email,image}=props.singleItem
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
    <h4>Email:{email}</h4>
  </div>
  </div>
  </div>
    );
};

export default ItemCard;