import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const MyItem = () => {
    const [item,setItem]=useState([]);
    useEffect(()=>{
        fetch('https://sheltered-inlet-82200.herokuapp.com/item')
        .then(res=>res.json())
        .then(truckData=>setItem(truckData));
      },[])
      console.log(item)
    return (
        <div className='container mt-3'>
            <div className="row">
            {item.map(singleItem=><ItemCard singleItem={singleItem}></ItemCard>)
            }
            </div>
           
        </div>
    );
};

export default MyItem;