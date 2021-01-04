import ReactDOM from 'react-dom'

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="message">{message}</div>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
