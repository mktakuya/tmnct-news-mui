import FeedParser from 'feedparser';

const getNews = (response, category) => {
  const items = [];

  const feedParser = new FeedParser();

  response.pipe(feedParser);

  feedParser.on('readable', function () {
    const item = this.read();
    if (item) {
      if (category === 'all') {
        items.push(item);
      } else if (item.categories[0] === category) {
        items.push(item);
      }
    }
  });

  feedParser.on('end', function() {
    // TODO: Is it working correctly?
    return items;
  });
}

const initialState = {
  category: undefined,
  news: undefined,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        category: action.payload.category,
        news: undefined,
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : { ...state, news: getNews(action.payload.response, state.category) };

    default:
      return state;
  }
}

