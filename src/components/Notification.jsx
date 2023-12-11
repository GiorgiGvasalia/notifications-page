import InteractingWay from "./InteractingWay";
import NotifTime from "./NotifTime";
import NotificationSubject from "./NotificationSubject";
import UserName from "./UserName";
import "./Notification.css";
import UserAvatar from "./UserAvatar";
import PrivateMessage from "./PrivateMessage";

const Notification = ({
  avatar,
  userName,
  interactingWay,
  notificationSubject,
  time,
  id,
  subjectIsImage,
  picture,
  privateMsg,
  hasprivateMsg
}) => {
  return (
    <div id={id} className={hasprivateMsg ? 'with-private-msg':"notification-container"}>
      <div className="notification-container">
      <UserAvatar avatar={avatar} />
      <div className="name-and-time">
        <UserName userName={userName} />
        <NotifTime time={time} />
      </div>
      <InteractingWay interactingWay={interactingWay} />
        <NotificationSubject
          notificationSubject={notificationSubject}
          subjectIsImage={subjectIsImage}
          picture={picture}
        />

      </div>
        {privateMsg && (
          <div className="private-message-container">
            <PrivateMessage privateMsg={privateMsg} />
          </div>
        )}
    </div>
  );
};

export default Notification;
