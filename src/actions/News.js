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

    const req = request(FEED_URL);

    const items = [];

    req.on('response', function(res) {
      dispatch(receiveData(category, null, res));
    });

    req.on('end', function() {
      dispatch(finishRequest(category));
    });
  }
}