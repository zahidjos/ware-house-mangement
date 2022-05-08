import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Products = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('https://sheltered-inlet-82200.herokuapp.com/home')
      .then(res=>res.json())
      .then(truckData=>setData(truckData));
    },[])
    
   
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                data.map((singleData)=>
                <Card truckData={singleData}></Card>
                )
            }
                </div>
            </div>
            
        </div>
    );
};

export default Products;