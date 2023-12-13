import './PrivateMessage.css'

const PrivateMessage = ({ privateMsg }) => {
  return (
    <>
      {privateMsg && (
        <div className="private-msg-container">
          <span>{privateMsg}</span>
        </div>
      )}
    </>
  );
};

export default PrivateMessage;
