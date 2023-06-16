import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import ContactsPage from './ContactsPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';

function App() {
  const fetchSize = 20;
  const [users, setUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);

  const [isHome, setHome] = useState(true);
  const [isLogged, setLogin] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        'https://nocors.cyclic.app/randomuser.me/api?results=300'
      );
      const data = await response.json();
      setUsers(data.results);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    setLoadedUsers(users.slice(0, fetchSize));
  }, [users]);

  function getMoreUsers() {
    const startIndex = loadedUsers.length;
    const endIndex = startIndex + fetchSize;
    const nextUsers = users.slice(startIndex, endIndex);
    setLoadedUsers((prevUsers) => [...prevUsers, ...nextUsers]);
  }
  function handleLog() {
    setLogin((value) => !value);
  }
  function handleGo() {
    setHome(false);
  }

  return (
    <div className="mainDiv bg-slate-300 ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home onGo={handleGo} />} />
          <Route path="/home" render={() => <ContactsPage />} />
        </Routes>
      </Router>
      {!isHome ? (
        !isLogged ? (
          <Login clicked={handleLog} />
        ) : (
          <ContactsPage
            users={users}
            loadedUsers={loadedUsers}
            handleLog={handleLog}
            getMoreUsers={getMoreUsers}
          />
        )
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
