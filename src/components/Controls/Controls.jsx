import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ showNext, showPrev }) => {
  const { controls, button } = styles;
  return (
    <section className={controls}>
      <button type="button" className={button} onClick={showPrev}>
        Назад
      </button>
      <button type="button" className={button} onClick={showNext}>
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  showNext: PropTypes.func.isRequired,
  showPrev: PropTypes.func.isRequired,
};

export default Controls;
