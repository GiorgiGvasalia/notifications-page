import "./Notification.css";

const Notification = ({
  children,
  privateMsg,
  onNotificationClick,
  notificationId,
  isRead
}) => {
  const containerClassName = `notification-container ${privateMsg ? "with-private-msg" : ""} ${isRead ? "read-notification" : "unread-notification"}`;
  return (
    <div
      onClick={() => onNotificationClick(notificationId)}
      className={containerClassName}
    >
      {children}
    </div>
  );
};

export default Notification;
