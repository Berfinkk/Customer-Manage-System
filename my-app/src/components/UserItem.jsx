import { FaTrash } from 'react-icons/fa';
import './UserItem.css';


function UserItem({ users, user, setUsers }) {
  const { userName,userImage } = user;


  const handleDelete = () => {
    setUsers(users.filter((item) => item.id !== user.id));
  };

 

  return (
    <div className='user-item'>
      <div className='user-image'>
        <img src={userImage} alt='user' />
      </div>
      <div className='user-info'>
        <p>{userName}</p>
        <button className='delete-btn' onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default UserItem;





