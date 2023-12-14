import { useContext } from "react";
import { NotificationsContext } from "../NotificationsContext";
import NotificationInfo from "./NotificationInfo";
import UserAvatar from "./UserAvatar";
import "./Notification.css";

const Notification = ({
  notifData: {
    notifId,
    privateMsg,
    isRead,
    userName,
    interactingWay,
    subjectIsImage,
    picture,
    notificationSubject,
    avatar,
    time,
    hasPrivateMsg,
  },
  handleReadNotification,
}) => {
  const { setNotifications } = useContext(NotificationsContext);


  const handleNotificationClick = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notifId
          ? { ...notification, read: true }
          : notification
      )
    );
    handleReadNotification(notifId);
  };

  const containerClassName = `notification-container ${
    privateMsg ? "with-private-msg" : ""
  } ${isRead ? "read-notification" : "unread-notification"}`;

  return (
    <div onClick={handleNotificationClick} className={containerClassName}>
      <div className="avatar">
        <UserAvatar avatar={avatar} />
      </div>
      <NotificationInfo
        hasPrivateMsg={hasPrivateMsg}
        privateMsg={privateMsg}
        time={time}
        userName={userName}
        interactingWay={interactingWay}
        subjectIsImage={subjectIsImage}
        picture={picture}
        notificationSubject={notificationSubject}
        isRead={isRead}
      />
    </div>
  );
};

export default Notification;
