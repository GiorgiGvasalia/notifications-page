import './UserAvatar.css'

const UserAvatar = ({avatar}) => {
  return (
    <img className="user-avatar" src={`src/assets/images/${avatar}`} alt="" />
  )
}

export default UserAvatar