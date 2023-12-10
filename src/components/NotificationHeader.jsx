import NotificationsCount from "./NotificationsCount"
import MarkAllRead from "./MarkAllRead";
import './NotificationHeader.css'


const NotificationHeader = () => {
  return (
    <div className="header">
    <div className="header-title-and-count">
        <label>Notifications</label>
        <NotificationsCount notificationCount="10" />

    </div>
        <MarkAllRead />
    </div>
  )
}

export default NotificationHeader