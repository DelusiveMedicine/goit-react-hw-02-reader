import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleClick, disabledPrev, disabledNext }) => {
  const { controls, button } = styles;
  return (
    <section className={controls}>
      <button
        type="button"
        disabled={disabledPrev}
        className={button}
        onClick={handleClick}
        data-name="prev"
      >
        Назад
      </button>
      <button
        type="button"
        disabled={disabledNext}
        className={button}
        onClick={handleClick}
        data-name="next"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.defaultProps = {
  disabledPrev: true,
  disabledNext: true,
};

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool,
  disabledNext: PropTypes.bool,
};

export default Controls;
