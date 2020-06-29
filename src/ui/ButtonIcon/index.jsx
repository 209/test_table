import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  width: 25,
  height: 25,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
};

function ButtonIcon(props) {
  const { children, style, ...otherProps } = props;

  return (
    <button type="button" style={{ ...buttonStyle, ...style }} {...otherProps}>
      {children}
    </button>
  );
}
ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default ButtonIcon;
