import { handleActions } from 'redux-actions';

import { toggleMenu } from './actions';

const reducer = handleActions(
  {
    [toggleMenu]: (state, { payload }) => ({
      open: !state.open,
    }),
  },
  {
    open: false,
  } // initial state
);

export default reducer;
