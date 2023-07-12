import React from 'react';
import UserForm from './UserForm';

function NewUser({ users, setUsers }) {
  const onSaveUser = (newUserData) => {
    setUsers((prevState) => [newUserData, ...prevState]);
  };

  return (
    <div className='new-user-wrapper'>
      <UserForm onSaveUser={onSaveUser} users={users} />
    </div>
  );
}

export default NewUser;