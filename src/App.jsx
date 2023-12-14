import { useState, useEffect } from "react";
import NotificationHeader from "./components/NotificationHeader";
import Notification from "./components/Notification";
import { NotificationsContext } from "./NotificationsContext";

const initialData = [
  {
    id: 212,
    avatar: "avatar-mark-webber.webp",
    userName: "Mark Webber",
    interactingWay: "reacted to your recent post",
    notificationSubject: "My first tournament today",
    time: "now",
  },
];

function App() {
  const [notifications, setNotifications] = useState(initialData);

  const handleReadNotification = (notifId) => {
    setNotifications((prevNotifications) => {
      const notificationIndex = prevNotifications.findIndex(
        (notification) => notification.id === notifId
      );

      const updatedNotifications = [...prevNotifications];
      updatedNotifications[notificationIndex] = {
        ...updatedNotifications[notificationIndex],
        isRead: true,
      };
      return updatedNotifications;
    });
  };

  const unreadNotificationsLength = notifications.filter(
    (notification) => !notification.isRead
  ).length;
  

  const handleMarkAllRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const getNotifications = async () => {
    try {
      const response = await fetch("http://localhost:3000/notifications");
      const notificationData = await response.json();
      setNotifications(notificationData);

      if (!response.ok) throw new Error("can't fetch data");
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  

  return (
    <div className="notifications-page">
      <NotificationsContext.Provider
        value={{ notifications, setNotifications }}
      >
        <NotificationHeader
          notificationCount={unreadNotificationsLength}
          onAllReadClick={handleMarkAllRead}
        />
        {notifications.map((notifData) => (
          <Notification
            key={notifData.id}
            notifData={notifData}
            handleReadNotification={() => handleReadNotification(notifData.id)}
          />
        ))}
      </NotificationsContext.Provider>
    </div>
  );
}

export default App;
