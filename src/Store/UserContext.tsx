import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://test.flipnow.net/",
});
export const setApiToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getUser = async (dispatch: Function, accessToken: string) => {
  dispatch({ type: "GET_USER" });
  try {
    const response = await instance.get("auth/check");
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: "GET_USER_ERROR", error: e });
  }
};

export const getBooks = async (dispatch: Function) => {
  dispatch({ type: "GET_BOOKS" });
  try {
    const response = await instance.get("word");
    dispatch({ type: "GET_BOOKS_SUCCESS", data: response.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: "GET_BOOKS_ERROR", error: e });
  }
};

export const addBook = async (
  title: string,
  language: string,
  setFetch: Function
) => {
  try {
    await instance.post("word", { title, language });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putBook = async (
  title: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.put(`word/book/${bookId}`, { title });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putLanguage = async (
  language: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.put(`word/language/${bookId}`, { language });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (bookId: string, setFetch: Function) => {
  try {
    await instance.delete(`word/book/${bookId}`);
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const postWord = async (bookId: string, setFetch: Function) => {
  try {
    await instance.post(`word/book/${bookId}`, {
      wordInfo: [{ text: "", meaning: "" }],
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putWord = async (
  bookId: string,
  wordId: string,
  text: string,
  meaning: string,
  setFetch: Function
) => {
  try {
    await instance.put(`word/${bookId}/${wordId}`, {
      wordInfo: { text, meaning },
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const moveWord = async (
  srcBookId: string,
  desBookId: string,
  wordId: string,
  text: string,
  meaning: string,
  setFetch: Function
) => {
  try {
    await instance.post(`word/book/${desBookId}`, {
      wordInfo: [{ text, meaning }],
    });
  } catch (e) {
    console.log(e);
  }
  try {
    await instance.delete(`word/${srcBookId}/${wordId}`);
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const deleteWord = async (
  bookId: string,
  wordId: string,
  setFetch: Function
) => {
  try {
    await instance.delete(`word/${bookId}/${wordId}`);
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
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
    case "GET_USER":
      return {
        ...state,
        user: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: error(action.error),
      };
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
