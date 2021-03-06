import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  
  dispatch({ type: "LOGIN_START" });
  try {
    console.log( 'apiCalls');
    const res = await axios.post("/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    alert(err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};