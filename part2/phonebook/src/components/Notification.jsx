const Notification = ({ message }) => {
  if (message === null) return null;
  console.log(message);

  return (
    <div>
      {message.includes("Added") ? (
        <span className="success-message">{message}</span>
      ) : (
        <div className="error-message">{message}</div>
      )}
    </div>
  );
};

export default Notification;
