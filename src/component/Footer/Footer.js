import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
           <div className="footer_part">
             <div className="container">
              <div className="row d-flex justify-content-between">
              <div className="col-lg-2">
                  <h6>Quick Contact</h6>
                  <p>If you have any questions or need help, feel free to contact with our team.</p>
                  <h4>01061245741</h4>
                  <p>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
                  <p>Get Directions</p>
                 
                  
              </div>   
              <div className="col-lg-2">
                  <h6>Company</h6>
                  <ul>

                      <li>About Us</li>
                      <li>Leadership Team</li>
                      <li>News & Media</li>
                      <li>How It Works</li>
                      <li>Contacts</li>
                  </ul>
                  
              </div> 
               <div className="col-lg-2">
                  <h6>Services</h6>
                  <ul>
                      <li>COVID-19 Cleaning</li>
                      <li>Comprehensive Cleaning</li>
                      <li>Project Based Cleaning</li>
                      <li>Commercial Cleaning</li>
                      <li>Disinfection Cleaning</li>
                      <li>Janitorial Services</li>
                  </ul>
                  
               </div> 
               <div className="col-lg-2">
                   <h6>Support</h6>
                   <ul>
                       <li>Become A Franchise</li>
                       <li>Terms & Conditions</li>
                       <li>Cleaning Tips</li>
                       <li>Products</li>
                   </ul>
                </div> 
               <div className="col-lg-2">
               <button type="button" className="btn btn-warning">Request and Estimate</button>

                  
                </div>  
                  
              </div>   
            </div>   
               
           </div> 
        </div>
    );
};

export default Footer;