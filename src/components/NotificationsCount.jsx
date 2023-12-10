import './NotificationsCount.css'

const NotificationsCount = ({ notificationCount }) => {
  return (
    <div>
      <p className="notif-count">{notificationCount}</p>
    </div>
  );
};

export default NotificationsCount;
