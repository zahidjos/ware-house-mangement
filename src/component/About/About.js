import React from 'react';
import './About.css'
import parts from '../../images/parts.jpg'

const About = () => {
    return (
        <div className='about_part'>
            <div className="container">
                <h2 className='text-center'>About</h2>
                <div className="row d-flex align-items-center mt-5">
                    <div className="col-lg-5"> <img className='img-fluid w-100' src={parts} alt="" /></div>
                    <div className="col-lg-7"> 
                    <h3 className='text-center'>You name it – We supply it!</h3>  
                    <p className='text-center'> Any truck trailer parts you need, we will deliver right to your doorstep! No matter where you are. We have a vast production line and supply of American, European and Japanese truck accessories. Our product ranges include but are not limited to brake parts, lights, valve, axles, clutches, diagrams, shafts and the list goes on!</p></div>
                </div>
            </div>
            
          
        </div>
    );
};

export default About;