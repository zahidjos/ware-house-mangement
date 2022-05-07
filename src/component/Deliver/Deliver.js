import React from 'react';
import deliver from '../../images/deliver.jpg'
import './Deliver.css'

const Deliver = () => {
    return (
        <div className='container deliver_part'>
            <h2 className='text-center'>Our Expert Deliver</h2>
            <div className="row d-flex align-items-center mt-5">
                <div className="col-lg-7 text-center">
                    <h4>Our Expert Deliver Vehicle You Con count on</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis amet blanditiis libero temporibus facere fuga, fugiat earum veritatis. Delectus necessitatibus corrupti quaerat excepturi ab ducimus dolor recusandae alias, porro reprehenderit laudantium exercitationem cumque officiis debitis esse! Unde, enim veniam? </p>
                    </div>
                <div className="col-lg-5">
                    <img className='img-fluid w-100' src={deliver} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Deliver;