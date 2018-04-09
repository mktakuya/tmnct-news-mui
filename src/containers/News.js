import { connect } from 'react-redux';
import News from '../components/News';
import * as actions from '../actions/News';

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.category
});

const mapDispatchToProps = dispatch => ({
  onMount (category) {
    dispatch(actions.fetchNews(category));
  },
  onUpdate(category) {
    dispatch(actions.fetchNews(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);