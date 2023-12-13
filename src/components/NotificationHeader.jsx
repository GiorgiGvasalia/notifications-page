import NotificationsCount from "./NotificationsCount";
import MarkAllRead from "./MarkAllRead";
import "./NotificationHeader.css";

const NotificationHeader = ({ notificationCount, onAllReadClick }) => {
  return (
    <div className="header">
      <div className="header-title-and-count">
        <label>Notifications</label>
        <NotificationsCount notificationCount={notificationCount} />
      </div>
      <MarkAllRead onAllReadClick={onAllReadClick} />
    </div>
  );
};

export default NotificationHeader;
