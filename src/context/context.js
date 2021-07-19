import React, { useReducer, createContext } from "react";

const initialCountState = {
  myCount: JSON.parse(localStorage.getItem("counter")),
};

if (localStorage.getItem("counter")) {
  initialCountState.myCount = JSON.parse(localStorage.getItem("counter"));
}

const CountContext = createContext({
  myCount: null,
  setCounts: (userData) => {},
});

function countReducer(state, action) {
  switch (action.type) {
    case "SETCOUNTER": {
      return {
        ...state,
        myCount: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        myCount: null,
      };
    }
    default:
      return state;
  }
}

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, initialCountState);

  const setCounts = (userData) => {
    localStorage.setItem("counter", JSON.stringify(userData));
    dispatch({
      type: "SETCOUNTER",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("counter");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <CountContext.Provider
      value={{ myCount: state.myCount, setCounts, logout }}
      {...props}
    />
  );
}

export { CountContext, CountProvider };
