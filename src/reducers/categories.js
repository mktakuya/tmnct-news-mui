const initialState = {
  categories: [
    {
      slug: 'all',
      name: 'すべて'
    },
    {
      slug: 'news',
      name: 'ニュース'
    },
    {
      slug: 'info',
      name: 'インフォメーション'
    }
  ]
};

export default () => initialState;