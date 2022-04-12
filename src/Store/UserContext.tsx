import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const instance = axios.create({
  baseURL: "https://test.flipnow.net/",
});
export const setApiToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const showError = () => {
  toast.error("Error occurred", {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const getUser = async (dispatch: Function) => {
  dispatch({ type: "GET_USER" });
  try {
    const response = await instance.get("auth/check");
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    showError();
    dispatch({ type: "GET_USER_ERROR", error: e });
  }
};

export const fetcher = async (url: string) => {
  try {
    console.log("yes");
    const response = await instance.get(url);
    console.log(response);
    return response.data;
  } catch (e) {
    showError();
  }
};

export const addBook = async (title: string, language: string) => {
  try {
    await instance.post("word", { title, language });
  } catch (e) {
    showError();
  }
};

export const putBook = async (title: string, bookId: string) => {
  try {
    await instance.put(`word/book/${bookId}`, { title });
  } catch (e) {
    showError();
  }
};

export const putLanguage = async (language: string, bookId: string) => {
  try {
    await instance.put(`word/language/${bookId}`, { language });
  } catch (e) {
    showError();
  }
};

export const deleteBook = async (bookId: string) => {
  try {
    await instance.delete(`word/book/${bookId}`);
  } catch (e) {
    showError();
  }
};

export const postWord = async (bookId: string) => {
  try {
    await instance.post(`word/book/${bookId}`, {
      wordInfo: [{ text: "", meaning: "" }],
    });
  } catch (e) {
    showError();
  }
};

export const putWord = async (
  bookId: string,
  wordId: string,
  text: string,
  meaning: string
) => {
  try {
    await instance.put(`word/${bookId}/${wordId}`, {
      wordInfo: { text, meaning },
    });
  } catch (e) {
    showError();
  }
};

export const moveWord = async (
  books,
  srcBookId: string,
  desBookId: string,
  wordId: string
) => {
  const promise = [
    instance.post(`word/book/${desBookId}`, {
      wordInfo: [
        {
          text: books
            .find((book) => book._id === srcBookId)
            .words.find((word) => word._id === wordId).text,
          meaning: books
            .find((book) => book._id === srcBookId)
            .words.find((word) => word._id === wordId).meaning,
        },
      ],
    }),
    instance.delete(`word/${srcBookId}/${wordId}`),
  ];
  try {
    await Promise.all(promise);
  } catch (e) {
    showError();
  }
};

export const deleteWord = async (bookId: string, wordId: string) => {
  try {
    await instance.delete(`word/${bookId}/${wordId}`);
  } catch (e) {
    showError();
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
