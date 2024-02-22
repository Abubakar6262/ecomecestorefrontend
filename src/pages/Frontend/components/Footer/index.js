import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <footer className="bg-white">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li>Address: 123 Street, City, Country</li>
                    <li>Name: John Doe</li>
                    <li>Email: john@example.com</li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5>About Us</h5>
                <ul className="list-unstyled">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="#">Random Link 1</Link></li>
                    <li><Link to="#">Random Link 2</Link></li>
                    <li><Link to="#">Random Link 3</Link></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5>Support</h5>
                <ul className="list-unstyled">
                    <li><Link className='decoration-none' to="/support">Support Link 1</Link></li>
                    <li><Link className='decoration-none' to="#">Support Link 2</Link></li>
                    <li><Link className='decoration-none' to="#">Support Link 3</Link></li>
                    <li><Link to="#">Support Link 4</Link></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5>Newsletter</h5>
                <p>Subscribe to our newsletter for updates.</p>
                <form>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Index