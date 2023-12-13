import "./MarkAllRead.css";

const MarkAllRead = ({ onAllReadClick }) => {
  return (
    <p onClick={onAllReadClick} className="mark-all-read">
      Mark All Read
    </p>
  );
};

export default MarkAllRead;
