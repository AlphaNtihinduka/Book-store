import * as actions from '../actionsTypes';

const reducer = (categories = [], action = {}) => {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under construction';
    default:
      return categories;
  }
};

// Action creator
export const checkStatus = () => ({
  type: actions.CHECK_STATUS,
});

export default reducer;
