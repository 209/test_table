import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Tab(props) {
  return props.children;
}
Tab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Tabs(props) {
  const { children } = props;
  const [activeTabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        const style = {
          textDecoration: index === activeTabIndex ? 'underline' : 'none',
        };
        const handleClick = () => setTabIndex(index);

        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <span onClick={handleClick} style={style}>
            {child.props.tabTitle}
          </span>
        );
      })}
      <div>{children.length ? children[activeTabIndex] : children}</div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Tabs;
