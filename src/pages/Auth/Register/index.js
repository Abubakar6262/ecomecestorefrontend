import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axois from 'axios'
import { BASE_URL } from "../../services/Helper";
function Index() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    city: "",
    dob: "",
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
    setIsProcessing(true)
    const { username, email, gender, password, country, city, dob } = formData
    const newUser = { username, email, gender, password, country, city, dob, role: "cutomer" }
    // console.log(newUser);
    axois.post(`${BASE_URL}api/auth/register`, newUser)
      .then((res) => {
        // const msg = res.data.message
        window.notify("User register successfully","success")

        const msg = res.data.message
        console.log(msg);
        window.notify(msg,"success")
        navigate("/auth/login")
      })
      .catch((error) => {
        const msg = error.response.data.message
        console.log("somthing went wrong ==>", error.response.data.message);
        window.notify(msg,"error")
      })
      .finally(()=>{
        setIsProcessing(false)
      })
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
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-sm">
                <label>Username</label>
                <input type="text" className="form-control" name="username" placeholder="Enter user name" value={formData.username} onChange={handleChange} />
              </div>
              <div className="form-group-sm">
                <label>Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group-sm">
                <label>Gender</label><br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleChange} />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleChange} />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="form-group-sm">
                <label>Country</label>
                <input type="text" className="form-control" name="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} />
              </div>
              <div className="form-group-sm">
                <label>City</label>
                <input type="text" className="form-control" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="form-group-sm">
                <label>Date of Birth</label>
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
              <div className="form-group-sm">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="form-group-sm mb-1">
                <label>Confirm Password</label>
                <input type="password" className="form-control" name="confirmPassword" placeholder="confirm password" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <button type="submit" className="btn btn-primary btn-sm px-3">
                  {!isProcessing
                  ?"Register"
                  :"Processing"
                  }
                  </button>
                <Link to="/auth/login" className="text-decoration-none">Already have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
