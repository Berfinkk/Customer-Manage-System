import React, { useState } from 'react';
import UserItem from './UserItem';
import NewUser from './NewUser'
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);

  return (
    <div className='user-wrapper'>
      <h1>Customer Manage System</h1>
      <NewUser users={users} setUsers={setUsers}/>

      <div className='users'>
        {users.length === 0 ? (
          <p>There are no customers...</p>
        ) : (
          users.map((user) => (
            <UserItem
              users={users}
              setUsers={setUsers}
              key={user.id}
              user={user}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Users;



