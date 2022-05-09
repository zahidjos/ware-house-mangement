import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardMange from '../CardMange/CardMange';
import UseHook from '../UseHook/UseHook';
import './MangeItem.css'


const MangeItem = () => {
   
    const [data,setData]=UseHook();
    

    return (
        <div>
            <div className="container">
                <div className="row">
                {
                data.map((singleData)=>
                <CardMange truckData={singleData} key={singleData._id}></CardMange> 
                )
            }

           
            </div>
            <div className='add_button'>
            <Link to='/addItem'>Add Item</Link> 
            </div>
            </div>
        </div>
    );
};

export default MangeItem;