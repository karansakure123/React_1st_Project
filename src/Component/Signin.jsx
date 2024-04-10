import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/createacc.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
    const [formData, setFormData] = useState({
        emailAddress: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/profile');
        }, 600);
    };

    const handleCreateAccountClick = () => {
        navigate('/create-account');
    };

    return (
        <div className="container">
            <h1 className='text-start text-dark'>Signin to your PopX Account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailAddress">Email Address<span className="required">*</span></label>
                    <div className="input-border start">
                        <div className="midside"></div>
                        <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Enter your email address" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password<span className="required">*</span></label>
                    <div className="input-border start">
                        <div className="midside"></div>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-submit">Login</button>
            </form>
        </div>
    );
};

export default Signin;
