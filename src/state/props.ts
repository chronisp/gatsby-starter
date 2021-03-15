import { stateProp, actionProp } from './utils';

import { toggleMenu as toggleMenuAction } from './actions';

const open = stateProp(state => ({
  open: state.open,
}));

const toggleMenu = actionProp(dispatch => ({
  toggleMenu: () => dispatch(toggleMenuAction()),
}));

export { open, toggleMenu };
