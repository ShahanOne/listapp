import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const fetchSize = 20;
  const [users, setUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);

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

  return (
    <div className="mainDiv bg-slate-300 ">
      {!isLogged ? (
        <Login clicked={handleLog} />
      ) : (
        <>
          <div className="header grid grid-cols-8 text-white  bg-indigo-600 px-4 py-12 shadow-lg">
            <p className="col-span-6 md:col-span-7 text-3xl">Contact List</p>
            <button
              onClick={handleLog}
              className="col-span-2 md:col-span-1 rounded shadow-lg py-2 md:px-4 text-indigo-600 bg-slate-200 hover:bg-slate-100 focus:translate-y-1"
            >
              Logout
            </button>
          </div>

          <div className="listDiv text-center py-8 px-4 md:px-40">
            {!users.length ? (
              <p className="text-2xl py-60">Loading ↻</p>
            ) : (
              loadedUsers.map((user, index) => (
                <div className="shadow-sm grid grid-cols-3  py-4" key={index}>
                  <img
                    className="rounded-full"
                    src={user.picture.medium}
                    alt=""
                  />
                  <p className="text-lg col-span-2 py-2">
                    {user.name.first} {user.name.last}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="text-center">
            <button
              onClick={getMoreUsers}
              className={`text-white ${
                !users.length ? 'invisible' : ''
              } bg-indigo-600 hover:bg-indigo-500 p-4 my-4 shadow-lg rounded-md`}
            >
              Load More
            </button>
            <div className="footer text-white text-2xl bg-indigo-600 px-4 py-12 shadow-lg">
              {'</>'} 2023
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
