import * as actions from "./actionTypes";

export const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVE,
    payload: {
      id: id,
    },
  };
};
