/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls';
import Counter from '../Counter';

class Reader extends Component {
  state = {
    articleIndex: 0,
  };

  showNext = () => {
    const { items } = this.props;
    const { articleIndex } = this.state;
    if (articleIndex + 1 < items.length)
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex + 1,
      }));
  };

  showPrev = () => {
    const { articleIndex } = this.state;
    if (articleIndex)
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex - 1,
      }));
  };

  render() {
    const { items } = this.props;
    const { reader } = styles;
    const { articleIndex } = this.state;
    return (
      <div className={reader}>
        <Controls showNext={this.showNext} showPrev={this.showPrev} />
        <Counter article={articleIndex + 1} allArticles={items.length} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reader;
