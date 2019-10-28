/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

class Reader extends Component {
  state = {
    articleIndex: 0,
  };

  handleClick = ({ target }) => {
    const { dataset } = target;
    const { items } = this.props;
    const { articleIndex } = this.state;
    if (dataset.name === 'next' && articleIndex + 1 < items.length)
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex + 1,
      }));
    if (dataset.name === 'prev' && articleIndex)
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex - 1,
      }));
  };

  render() {
    const { items } = this.props;
    const { reader } = styles;
    const { articleIndex } = this.state;
    const targetArticle = items[articleIndex];
    const pageNumber = articleIndex + 1;
    return (
      <div className={reader}>
        <Controls
          disabledPrev={!articleIndex}
          disabledNext={articleIndex === items.length - 1}
          handleClick={this.handleClick}
        />
        <Counter article={pageNumber} allArticles={items.length} />
        <Publication pageNumber={pageNumber} article={targetArticle} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reader;
