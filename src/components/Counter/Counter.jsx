import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ article, allArticles }) => {
  const { counter } = styles;
  return <p className={counter}>{`${article}/${allArticles}`}</p>;
};

Counter.defaultProps = {
  article: 1,
};

Counter.propTypes = {
  article: PropTypes.number,
  allArticles: PropTypes.number.isRequired,
};

export default Counter;
