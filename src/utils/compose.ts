const compose = (...funcs) => a =>
  funcs.reverse().reduce((result, func) => func(result), a);

export default compose;
