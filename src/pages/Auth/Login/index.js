import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BASE_URL } from "../../services/Helper";

function Index() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    city: "",
    phoneNumber: "",
    dateOfBirth: "",
  });
  const [isProcessing,setIsProcessing] = useState(false)
  const navigate = useNavigate()
  // Handle input changes and update state accordingly
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true)
    axios.post(`${BASE_URL}api/auth/login`,formData)
    .then((res)=>{
      console.log(res);
      const msg = res.data.message
      const token = res.data.token
      console.log(msg,"token==>",token);
      window.notify(msg,"success")
      navigate(`/?token=${token}`);
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
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group-sm">
              <label>Email</label>
              <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group-sm mb-2">
              <label>Password</label>
              <input type="password" className="form-control" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-between align-items-center ">
            <Link to="/auth/register" className="text-decoration-none">Register Now</Link>
            <button type="submit" className="btn btn-primary btn-sm px-3">
              {!isProcessing
              ?"Login"
              :"Processing"

              }
              </button>
            <Link to="/auth/forgotpassword" className="text-decoration-none">Forgot password</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Index;
