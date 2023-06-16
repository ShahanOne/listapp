import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import ContactsPage from './components/ContactsPage';

<Router>
  <Routes>
    <Route exact path="/" component={Login} />
    <Route path="/home" render={() => <ContactsPage />} />
  </Routes>
</Router>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
