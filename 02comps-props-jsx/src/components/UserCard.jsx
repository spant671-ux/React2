import './UserCard.css';
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id= 'user-img' src='https://picsum.photos/150' alt='caption' />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard