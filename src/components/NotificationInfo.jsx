import "./NotificationInfo.css";
import UnreadIcon from "./UnreadIcon";

const NotificationInfo = ({
  userName,
  interactingWay,
  subjectIsImage,
  picture,
  notificationSubject,
  time,
  privateMsg,
  isRead,
}) => {
  const formatTimeDifference = (notificationTime) => {
    const now = new Date();
    const notificationTimestamp = new Date(notificationTime);
    const timeDifference = now - notificationTimestamp;
    const minutesDifference = Math.floor(timeDifference / (60 * 1000));

   

    if (minutesDifference < 1) {
      return "just now";
    } else if (minutesDifference === 1) {
      return "1 minute ago";
    } else if (minutesDifference < 60) {
      return `${minutesDifference} minutes ago`;
    } else if (minutesDifference < 120) {
      return "1 hour ago";
    } else if (minutesDifference < 24 * 60) {
      const hoursDifference = Math.floor(minutesDifference / 60);
      return `${hoursDifference} hours ago`;
    } else if (minutesDifference < 48 * 60) {
      return "1 day ago";
    } else {
      const daysDifference = Math.floor(minutesDifference / (24 * 60));
      return `${daysDifference} days ago`;
    }
  };

  return (
    <div className="notification-info">
      <div className="name-and-time">
        <p className="user-name">{userName}</p>
        <span>{formatTimeDifference(time)}</span>
      </div>
      <p className="interaction-text">{interactingWay} <span className='subject-text'>{notificationSubject}</span> </p>
      {privateMsg && (
        <div className="private-msg-container">
          <span>{privateMsg}</span>
        </div>
      )}
      <>
        {subjectIsImage && (
          <img
            className="subject-img"
            src={`src/assets/images/${picture}`}
            alt=""
          />
        )}
        {!isRead && <UnreadIcon />}
      </>
    </div>
  );
};

export default NotificationInfo;
