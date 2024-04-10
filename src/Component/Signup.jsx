import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/style.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CreateAccount from './Createaccount';
import SignIn from './Signin';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateAccountClick = () => {
    // Navigate to the CreateAccount page
    navigate('/Createaccount');
  };

  const handleSignInClick = () => {
    // Navigate to the SignIn page
    navigate('/sign-in');
  };

  return (
    <div className="mycontainer">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 col-xl-12">
            <div className="card border-0 ">
              <div className="card-body">
                <h5 className="card-title-1">Welcome to PopX</h5>
                <p className="card-text-1 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="button-container">
                  <div className="button-wrapper">
                    <button className="btn createacc-btn" onClick={handleCreateAccountClick}>
                      Create Account
                    </button>
                  </div>
                  <div className="button-wrapper mt-3">
                    <button className="btn already-btn" onClick={handleSignInClick}>
                      Already registered? Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
