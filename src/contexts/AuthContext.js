import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signIn = (dispatach) => {
  return ({ email, password }) => {};
};

const signUp = (dispatch) => {
  return ({ email, password }) => {
    // make api request
    // if sign up -> modify state ->  update state that we auth
    // if failed -> show some error
  };
};

const signOut = (dispatch) => {
  return ({}) => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false }
);
