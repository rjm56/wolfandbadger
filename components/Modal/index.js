const Modal = ({ children, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>close</button>
      {children}
    </div>
  );
};

export default Modal;
