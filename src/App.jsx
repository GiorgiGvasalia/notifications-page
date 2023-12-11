import "./App.css";
import NotificationHeader from "./components/NotificationHeader";
import Notification from "./components/Notification";

const notificationsData = [
  {
    id: 212,
    avatar: "avatar-mark-webber.webp",
    userName: "Mark Webber",
    interactionWay: "reacted to your recent post",
    notificationSubject: "My first tournament today",
    time: "now"
  },
  {
    id: 221,
    avatar: "avatar-angela-gray.webp",
    userName: "Angela Gray",
    interactionWay: "followed you",
    time: "5m ago"
  },
  {
    id: 122,
    avatar: "avatar-jacob-thompson.webp",
    userName: "Jacob Thompson",
    interactionWay: "has joined your group",
    notificationSubject: "Chess club",
    time: "2 days ago"
  },
  {
    id: 222,
    avatar: "avatar-rizky-hasanuddin.webp",
    userName: "Rizky Hasanuddin",
    interactionWay: "sent you private message",
    privateMsg:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    time: "1 week ago",
    hasPrivateMsg: true
  },
  {
    id: 767,
    avatar: "avatar-kimberly-smith.webp",
    userName: 'Kimberly Smith',
    interactionWay: "commented on your picture",
    subjectIsImage: true,
    picture: 'image-chess.webp',
    time: "10 days ago",
  }
];

function App() {
  return (
    <div className="notifications-page">
      <NotificationHeader />
      {notificationsData.map((notifData) => (
        <Notification
          key={notifData.id}
          avatar={notifData.avatar}
          userName={notifData.userName}
          interactingWay={notifData.interactionWay}
          notificationSubject={notifData.notificationSubject}
          time={notifData.time}
          subjectIsImage={notifData.subjectIsImage}
          picture={notifData.picture}
          privateMsg={notifData.privateMsg}
          hasprivateMsg={notifData.hasPrivateMsg}
        />
      ))}
    </div>
  );
}

export default App;