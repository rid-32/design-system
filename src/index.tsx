import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Products from 'components/Products';

import 'ui/styles.css';

const App: FC = () => {
  return <Products />;
};

ReactDOM.render(<App />, document.getElementById('root'));
