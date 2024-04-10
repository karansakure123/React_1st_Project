import React, { useState } from 'react';
import CreateAccount from './Createaccount';

const UserProfile = () => { 

  return (
    <>
      <div className="container bg-transparent" style={{ boxShadow: 'none' }}>
        <div className="heading">
          <h2>Account Setting</h2>

        </div>
      </div>
      <div className="container bg-transparent">
        <div className="card border-0 mb-3  bg-transparent">
          <div className="row g-0">
            <div className="col-4">
              <img
                src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc"
                className="img-fluid rounded-circle"
                alt="Profile"
                style={{
                  width: '90px', marginLeft: '1rem', height: '90px', '@media (max-width: 768px)': {
                    marginLeft: '2rem',
                  }
                }}
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Tile Marry Doe</h5>
                <p className="card-text">marry@gmail.com</p>
              </div>
            </div>
            <p style={{ textAlign: 'justify' }} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio earum non aut? Sapiente enim voluptates dolorem distinctio nulla fugiat.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
