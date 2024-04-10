import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import CreateAccount from './Component/Createaccount';
import UserProfile from './Component/Profile';
import Signin from './Component/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Createaccount" element={<CreateAccount />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/sign-in" element={<Signin />} /> {/* Update the path */}
      </Routes>
    </Router>
  );
}

export default App;
