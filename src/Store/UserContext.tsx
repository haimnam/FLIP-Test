import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

export const getUser = async (dispatch, accessToken) => {
  console.log("get books");
  console.log(accessToken);
  dispatch({ type: "GET_BOOKS" });
  try {
    const response = await axios.get("https://test.flipnow.net/word", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    dispatch({ type: "GET_BOOKS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_BOOKS_ERROR", error: e });
  }
};

export const getBooks = async (dispatch, accessToken) => {
  console.log("get books");
  console.log(accessToken);
  dispatch({ type: "GET_BOOKS" });
  try {
    const response = await axios.get("https://test.flipnow.net/word", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    dispatch({ type: "GET_BOOKS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_BOOKS_ERROR", error: e });
  }
};

const initialState = {
  books: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};
const loadingState = {
  loading: true,
  data: null,
  error: null,
};
const success = (data) => ({
  loading: false,
  data,
  error: null,
});
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        books: loadingState,
      };
    case "GET_BOOKS_SUCCESS":
      return {
        ...state,
        books: success(action.data),
      };
    case "GET_BOOKS_ERROR":
      return {
        ...state,
        books: error(action.error),
      };
    default:
      throw new Error(`invalid action type: ${action.type}`);
  }
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error("UserContext error occurred");
  }
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error("UserContext error occurred");
  }
  return dispatch;
};
