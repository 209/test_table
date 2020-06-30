import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  padding: '5px 10px 5px 10px',
  margin: '5px 0 5px 0',
};

function Button(props) {
  const { children, style, ...otherProps } = props;

  return (
    <button style={{ ...buttonStyle, ...style }} type="button" {...otherProps}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
Button.defaultProps = {
  style: {},
};

export default Button;
