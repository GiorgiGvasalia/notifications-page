import './NotificationSubject.css'

const NotificationSubject = ({
  notificationSubject,
  subjectIsImage,
  picture,
}) => {
  return (
    <>
      {subjectIsImage ? (
        <img className="subject-img" src={`src/assets/images/${picture}`} alt="" />
      ) : (
        <label className='subject-text'>{notificationSubject}</label>
      )}
    </>
  );
};

export default NotificationSubject;
