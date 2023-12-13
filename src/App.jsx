import "./App.css";
import NotificationHeader from "./components/NotificationHeader";
import Notification from "./components/Notification";
import { useState, useEffect } from "react";
import InteractingWay from "./components/InteractingWay";
import NotifTime from "./components/NotifTime";
import NotificationSubject from "./components/NotificationSubject";
import UserName from "./components/UserName";
import UserAvatar from "./components/UserAvatar";
import NotificationInfo from "./components/NotificationInfo";
import UnreadIcon from "./components/UnreadIcon";
import PrivateMessage from "./components/PrivateMessage";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 212,
      avatar: "avatar-mark-webber.webp",
      userName: "Mark Webber",
      interactionWay: "reacted to your recent post",
      notificationSubject: "My first tournament today",
      time: "now",
    },
  ]);


  // MARK SINGLE NOTIFICATION READ

  const handleReadNotification = (notifiId) => {
    setNotifications((prevNotifications) => {
      const notificationIndex = prevNotifications.findIndex(
        (notification) => notification.id === notifiId
      );

      const updatedNotifications = [...prevNotifications];
      updatedNotifications[notificationIndex] = {
        ...updatedNotifications[notificationIndex],
        read: true,
      };
      return updatedNotifications;
    });
  };

  // NOTIFICATIONS COUNT
  const unreadNotificationsLength = notifications.filter(
    (notification) => !notification.read
  ).length;


  // MARK ALL READ

  const handleMarkAllRead = () => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notification) => ({
        ...notification,
        read: true
      }))
    })

  }

//GETTING NOTIFICATIONS 

  const getNotifications = async () => {
    try {
      const response = await fetch("http://localhost:3001/notifications");
      const notificationData = await response.json();
      setNotifications(notificationData);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="notifications-page">
      <NotificationHeader notificationCount={unreadNotificationsLength} onAllReadClick={handleMarkAllRead}/>
      {notifications.map((notifData) => (
        <Notification
          isRead={notifData.read}
          privateMsg={notifData.privateMsg}
          key={notifData.id}
          onNotificationClick={() => handleReadNotification(notifData.id)}
        >
          <NotificationInfo>
            <UserAvatar avatar={notifData.avatar} />
            <div className="name-and-time">
              <UserName userName={notifData.userName} />
              <NotifTime time={notifData.time} />
            </div>
            <InteractingWay interactingWay={notifData.interactionWay} />
            <NotificationSubject
              notificationSubject={notifData.notificationSubject}
            />
            {!notifData.read && <UnreadIcon />}
          </NotificationInfo>
          <PrivateMessage privateMsg={notifData.privateMsg} />
        </Notification>
      ))}
    </div>
  );
}

export default App;
