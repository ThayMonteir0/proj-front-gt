import React from 'react';
import PropTypes from 'prop-types';

const FooterInfo = ({ title, informations }) => {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      <ul className="space-y-2">
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link} className="text-white hover:text-primary transition-colors duration-300">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterInfo.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterInfo;
