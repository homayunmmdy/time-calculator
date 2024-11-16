import * as actions from "./actionTypes";

export const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVE,
    payload: {
      id,
    },
  };
};

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
