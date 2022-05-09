import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StockItem = () => {
    const params=useParams();
    const navigate=useNavigate()
    const [updateData,setUpdateData]=useState([]);
    const{name,image,price,description,quantity,supplier,_id}= updateData;
    useEffect(()=>{
        let url=`https://sheltered-inlet-82200.herokuapp.com/service/${params.id}`;
        fetch(url)
        .then(res=>res.json())
        .then(truckData=>setUpdateData(truckData));
      },[])
      console.log(updateData);
    const stockUpdate=(event)=>{
        event.preventDefault();
        let input=event.target.number.value;
        let number=parseInt(input) +parseInt(quantity);
        
       
        
                const updateUser={number};
                fetch(`https://sheltered-inlet-82200.herokuapp.com/user/${params.id}`,{
               method:'PUT',
               headers:{'content-type':'application/json'},
                body:JSON.stringify(updateUser)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            navigate(`/update/${params.id}`);
               

    }
   
    
    return (
        <div>
            <div className="container">
            <div className='w-50 m-auto mt-3'>
                <form onSubmit={stockUpdate}>
                <input type="number" placeholder='Enter Number of stock' className="form-control" name="number" id="" />
                 <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
           
            </div>
            
        </div>
    );
};

export default StockItem;