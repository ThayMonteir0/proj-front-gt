// src/components/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const titleStyle = {
    color: '#474747',
    fontSize: '24px',
    textAlign: titleAlign,
  };

  const linkStyle = {
    color: '#C92071',
    fontSize: '18px',
    textDecoration: 'none',
    float: 'right',
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={titleStyle}>{title}</h2>
      {link && (
        <a href={link.href} style={linkStyle}>
          {link.text}
        </a>
      )}
      <div style={{ display: 'flex', gap: '16px' }}>{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
