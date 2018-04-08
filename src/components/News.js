import React from 'react';
import PropTypes from 'prop-types';

export default function News({ category }) {
  return (
    <div>
      <h2>Newsコンポーネント</h2>
      <p>カテゴリー: { category }</p>
    </div>
  );
}

News.propTypes = {
  category: PropTypes.string
};

News.defaultProps = {
  category: 'all'
};
