import React from "react";
import { Link } from "react-router-dom";
import image from '../../../assets/imgaes/eCommerce-Website-Components-photo.jpg'

function index() {
  const handleSubmit = () => {
    console.log("handle submit is running succussfully");
    window.notify("This is working successfully", "success");
  };
  return (
    
      
      <div className="container-fluid p-0">
            <div className="position-relative">
                <img src={image} className="img-fluid" alt="Home"  width={"100%"}/>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h2 className="text-white">Welcome to My Website</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus sed lorem malesuada consectetur.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    
  );
}

export default index;
