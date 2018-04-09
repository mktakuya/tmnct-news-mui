import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import News from './containers/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">すべてのカテゴリ</Link></li>
          <li><Link to="/category/news">ニュース</Link></li>
          <li><Link to="/category/info">インフォメーション</Link></li>
        </ul>

        <Route path="/all" component={ News } />
        <Route path="/category/:category" render={
          ({ match }) =>  <News category={ match.params.category } />
        } />
      </div>
    );
  }
}

export default App;
