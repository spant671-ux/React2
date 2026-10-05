import './UserCard.css';
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>I am User.</p>
        <img id= 'user-img' src='https://picsum.photos/150' alt='caption' />
        <p id='user-desc'>Description of User</p>
    </div>
  )
}

export default UserCard