import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Products.css';


const Products = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('https://sheltered-inlet-82200.herokuapp.com/home')
      .then(res=>res.json())
      .then(truckData=>setData(truckData));
    },[])
    
   
    return (
        <div className='stock_part'>
            <div className="container">
                <h2 className='text-center'>Our Stock Truck</h2>
                <div className="row mt-3">
                {
                data.map((singleData)=>
                <Card truckData={singleData}></Card>
                )
            }
                </div>
                <div className='mange_button'>
            <Link to='/mangeItem'>Mange Item</Link> 
            </div>
            </div>
            
        </div>
    );
};

export default Products;