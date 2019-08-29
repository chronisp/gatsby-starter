import { connect } from 'react-redux';

const STATE_PROP = 'STATE_PROP';
const ACTION_PROP = 'ACTION_PROP';

const stateProp = (mapStateToProp: Object => Object) => {
  mapStateToProp.type = STATE_PROP;
  return mapStateToProp;
};

const actionProp = mapActionToProp => {
  mapActionToProp.type = ACTION_PROP;
  return mapActionToProp;
};

const combineMaps = (propsType, propsMaps) => stateOrDispatch =>
  propsMaps
    .filter(map => map.type === propsType)
    .reduce((props, map) => Object.assign(props, map(stateOrDispatch)), {});

const connectProps = (...propsMaps) =>
  connect(
    combineMaps(STATE_PROP, propsMaps),
    combineMaps(ACTION_PROP, propsMaps)
  );

export { stateProp, actionProp, connectProps };
