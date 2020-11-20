const showNavbarReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return !state;
    case "CLOSE_NAVBAR":
      return false;
    default:
      return state;
  }
};

export default showNavbarReducer;
