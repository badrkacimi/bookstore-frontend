import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Books from './components/    Books';

function App() {
  const [authData, setAuthData] = useState({ email: '', password: '' });

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register setAuthData={setAuthData} />} />
          <Route path="/books" element={<Books email={authData.email} password={authData.password} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
