const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
  login: !!token,
  stateLogin: !!token,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        login: !!token,
        stateLogin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        login: !token,
        stateLogin: false,
      };
  }
  return state;
};

export default AuthReducer;
