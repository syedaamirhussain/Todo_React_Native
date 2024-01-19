const initialState = {
    user: null,
  }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "User":
            return {...state,user:action.payload};
       
        default: return state;
    }
}
export default userReducer;