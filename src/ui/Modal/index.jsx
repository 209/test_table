import React from 'react';
import PropTypes from 'prop-types';

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
const overlayStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#ccc',
  opacity: 0.5,
  zIndex: 1,
};
const contentStyle = {
  zIndex: 2,
  backgroundColor: 'white',
  width: '400px',
  height: '400px',
  padding: '10px',
};

function Modal(props) {
  const { children, onClose } = props;

  return (
    <div style={wrapperStyle}>
      <div onClick={onClose} style={overlayStyle} />
      <div style={contentStyle}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
