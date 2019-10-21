import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ article, pageNumber }) => {
  const { title, text, id } = article;
  const { publication } = styles;

  return (
    <article key={id} className={publication}>
      <h2>{`${pageNumber}. ${title}`}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.defaultProps = {
  pageNumber: 1,
  article: {
    title: 'No publication found',
  },
};

Publication.propTypes = {
  pageNumber: PropTypes.number,
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Publication;
