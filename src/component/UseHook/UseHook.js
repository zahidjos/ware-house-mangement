import React, { useEffect, useState } from 'react';

const UseHook = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('https://sheltered-inlet-82200.herokuapp.com/service')
      .then(res=>res.json())
      .then(truckData=>setData(truckData));
    },[])
    return [data,setData];
};

export default UseHook;