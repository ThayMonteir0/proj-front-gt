import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children, className }) => {
  const titleText = typeof title === 'string' ? title : title?.text || '';
  const titleAlignment = title?.align || titleAlign;

  return (
    <div className={`my-8 ${className}`}>
      <div className="grid grid-cols-7 gap-4 mb-2">
        <h2 className={`text-2xl font-semibold text-gray-800 text-${titleAlignment} col-start-1 row-start-1`}>
          {titleText}
        </h2>
        {link && (
          <Link to={link.href} className="text-pink-600 hover:underline col-start-7 row-start-1 text-right">
            {link.label} →
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
