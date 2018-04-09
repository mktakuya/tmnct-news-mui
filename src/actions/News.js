import FeedParser from 'feedparser';
import request from 'request';

const FEED_PROXY = 'https://cors-anywhere.herokuapp.com/';
const FEED_BASE = 'http://www.tomakomai-ct.ac.jp/feed';
const FEED_URL = FEED_PROXY + FEED_BASE;

const startRequest = (category) => ({
  type: 'START_REQUEST',
  payload: { category }
});

const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { category, error, response },
});

const finishRequest = category => ({
  type: 'FINISH_REQUEST',
  payload: { category }
})

export const fetchNews = category => {
  return async dispatch => {
    dispatch(startRequest(category));

    const feedParser = new FeedParser();
    const req = request(FEED_URL);

    const items = [];

    req.on('response', function(res) {
      dispatch(receiveData(category, null, res.data));
      this.pipe(feedParser);
    });

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
      dispatch(finishRequest(category));
    });
  }
}