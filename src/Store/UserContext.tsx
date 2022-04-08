import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://test.flipnow.net/word",
});

export const getBooks = async (dispatch: Function, accessToken: string) => {
  dispatch({ type: "GET_BOOKS" });
  try {
    const response = await instance.get("", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "GET_BOOKS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_BOOKS_ERROR", error: e });
  }
};

export const addBook = async (
  accessToken: string,
  title: string,
  language: string,
  setFetch: Function
) => {
  try {
    await instance.post(
      "",
      { title, language },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putBook = async (
  accessToken: string,
  title: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.put(
      `/book/${bookId}`,
      { title },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putLanguage = async (
  accessToken: string,
  language: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.put(
      `/language/${bookId}`,
      { language },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (
  accessToken: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.delete(`/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const postWord = async (
  accessToken: string,
  bookId: string,
  setFetch: Function
) => {
  try {
    await instance.post(
      `/book/${bookId}`,
      {
        wordInfo: [{ text: "", meaning: "" }],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const putWord = async (
  accessToken: string,
  bookId: string,
  wordId: string,
  text: string,
  meaning: string,
  setFetch: Function
) => {
  try {
    await instance.put(
      `/${bookId}/${wordId}`,
      { wordInfo: { text, meaning } },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const moveWord = async (
  accessToken: string,
  srcBookId: string,
  desBookId: string,
  wordId: string,
  text: string,
  meaning: string,
  setFetch: Function
) => {
  try {
    await instance.post(
      `/book/${desBookId}`,
      { wordInfo: [{ text, meaning }] },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  try {
    await instance.delete(`/${srcBookId}/${wordId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const deleteWord = async (
  accessToken: string,
  bookId: string,
  wordId: string,
  setFetch: Function
) => {
  try {
    await instance.delete(`/${bookId}/${wordId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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
  console.log(state);
  console.log(action);
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
