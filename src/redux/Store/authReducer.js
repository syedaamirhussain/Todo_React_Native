const initialState = {
  user: null,
  error: null,
  isSignUploading: false,
  isLoginLoading: false,
  notes: []
};

const HandleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_DATA':
      return { ...state, user: action.payload };
    case 'SIGN_IN_FAILURE':
      return { ...state, error: action.payload }
    case 'SIGN_UP_FAILURE':
      return { ...state, user: null, error: action.payload };
    case 'IS_SIGNUP_LOADING':
      return { ...state, isSignUploading: action.payload };
    case 'IS_LOGIN_LOADING':
      return { ...state, isLoginLoading: action.payload };
    case 'GET_USER_NOTES':
      return { ...state, notes: action.payload }
    default:
      return state;
  }
};

export default HandleAuthReducer;
