import React, { useEffect, useState } from 'react';
import CardMange from '../CardMange/CardMange';
import UseHook from '../UseHook/UseHook';


const MangeItem = () => {
   
    const [data,setData]=UseHook();
    

    return (
        <div>
            <div className="container">
                <div className="row">
                {
                data.map((singleData)=>
                <CardMange truckData={singleData} setData={setData}></CardMange> 
                )
            }
            </div>
            </div>
        </div>
    );
};

export default MangeItem;