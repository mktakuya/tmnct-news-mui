import React from 'react';
import PropTypes from 'prop-types';

export default class News extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps.category) {
      this.props.onUpdate(nextProps.category);
    }
  }

  render() {
    return (
      <div>
        <h2>Newsコンポーネント</h2>
        <p>カテゴリー: { this.props.category }</p>
      </div>
    );
  }
}

News.propTypes = {
  category: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

News.defaultProps = {
  category: 'all'
};
