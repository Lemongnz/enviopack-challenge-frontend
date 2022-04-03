export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "@profile/load":
      return action.profile;
    case "@profile/updateCredit":
      return { ...state, credit: state.credit - action.total };
    default:
      return state;
  }
};

export const loadProfile = (profile) => {
  return {
    type: "@profile/load",
    profile,
  };
};

export const updateCredit = (total) => {
  return {
    type: "@profile/updateCredit",
    total,
  };
};
