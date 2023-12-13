const NotifTime = ({ time }) => {


  const calculateTimeDifference = (notificationTime) => {
    const now = new Date();
    const notificationTimestamp = new Date(notificationTime);
    const timeDifference = now - notificationTimestamp;
    const minutesDifference = Math.floor(timeDifference / (60 * 1000));

    if (minutesDifference < 1) {
      return "just now";
    } else if (minutesDifference === 1) {
      return "1 minute ago";
    } else {
      return `${minutesDifference} minutes ago`;
    }
  };

  return (
    <label style={{ display: "flex", flexDirection: "column" }}>{calculateTimeDifference(time)}</label>
  );
};

export default NotifTime;
