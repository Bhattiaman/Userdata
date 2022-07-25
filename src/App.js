import React, { useState } from 'react'

const App = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async () => {

    const response = await fetch("https://api.github.com/users");
    const result = await response.json(); // result m data send krny k liy
    setUser(result);

  }
  return (
    <div className='App'>
      <h1>Hello Everyone</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}> <h1> id: {id} </h1>
          <li>Name: {login}
          </li>
          <li> url:
          {avatar_url}
          </li>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default App