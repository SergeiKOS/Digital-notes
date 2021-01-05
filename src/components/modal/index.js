import ReactDOM from "react-dom";

const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1
};

const modal = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 2
};

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={overlay} onClick={onClose}>
      <div style={modal} role="dialog" aria-modal="true">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
