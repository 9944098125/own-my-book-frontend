export default function userReducer(
  state = localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      localStorage.removeItem("user", null);
      return null;
    default:
      return state;
  }
}
