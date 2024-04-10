import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../Style/createacc.css';
import '../Style/signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        fullName: 'Marry Doe',
        phoneNumber: 'Marry Doe',
        emailAddress: 'MarryDoe@example.com',
        password: 'MarryDoePassword',
        company: 'Marry Doe Company',
        agency: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
    };

    return (
        <div className="container">
            {!isFormSubmitted ? (
                <>
                    <h1>Create Your PopX Account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number<span className="required">*</span></label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address<span className="required">*</span></label>
                            <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Enter your email address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="required">*</span></label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company<span className="required">*</span></label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" required />
                        </div>
                        <div className="form-group">
                            <label>Are you an Agency?<span className=" ">*</span></label>
                            <div className="agency-options">
                                <label className="radio-container">
                                    <input type="radio" name="agency" value="yes" checked={formData.agency === "yes"} onChange={handleChange} />
                                    <span className="checkmark"></span> Yes
                                </label>
                                <label className="radio-container">
                                    <input type="radio" name="agency" value="no" checked={formData.agency === "no"} onChange={handleChange} />
                                    <span className="checkmark"></span> No
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-submit">Create Account</button>
                    </form>
                </>
            ) : (
                <Navigate to="/profile" />
            )}
        </div>
    );
};

export default CreateAccount;
