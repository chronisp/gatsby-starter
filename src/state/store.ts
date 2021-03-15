import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducer';

const composeEnhancers = composeWithDevTools({ name: 'Gatsby Starter' });

const store = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware())
  );
};

export default store;
