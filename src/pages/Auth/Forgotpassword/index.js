import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../services/Helper";

function Index() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isProcessing,setIsProcessing] = useState(false)

  // Handle input changes and update state accordingly
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}api/auth/forgotpassword`,formData)
    .then((res)=>{
      console.log(res);
      const msg = res.data.message
      window.notify(msg,"success")
      navigate(`/auth/login`);
    })
    .catch((error)=>{
      const msg = error.response.data.message
      console.log("somthing went wrong ==>", error.response.data.message);
      window.notify(msg,"error")
    })
    .finally(()=>{
      setIsProcessing(false)
    })
    // console.log(formData);
  };

  return (
    <div className="bg-main">

    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 text-white">
          <h2>Some Content</h2>
          <p>This is some content displayed on one half of the page.</p>
        </div>
        <div className="col-md-6 bg-white p-2 card rounded-1 shadow-lg">
          <h2 className="text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group-sm mb-2">
              <label>Email</label>
              <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary btn-sm px-3 text-center">
              {!isProcessing
              ?"Send me mail"
              :"Maile is sending"

              }</button>         
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Index;
