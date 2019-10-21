import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ showNext, showPrev, disabledPrev, disabledNext }) => {
  const { controls, button } = styles;
  return (
    <section className={controls}>
      <button
        type="button"
        disabled={disabledPrev}
        className={button}
        onClick={showPrev}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={disabledNext}
        className={button}
        onClick={showNext}
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
  showNext: PropTypes.func.isRequired,
  showPrev: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool,
  disabledNext: PropTypes.bool,
};

export default Controls;
