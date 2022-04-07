import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import dayjs from "dayjs";

export const getBooks = async (dispatch, accessToken) => {
  dispatch({ type: "GET_BOOKS" });
  try {
    const response = await axios.get("https://test.flipnow.net/word", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "GET_BOOKS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_BOOKS_ERROR", error: e });
  }
};

export const addBook = async (accessToken, title, language, setFetch) => {
  try {
    await axios.post(
      "https://test.flipnow.net/word",
      { title: title + " " + dayjs().format("MM/DD"), language },
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

export const putBook = async (accessToken, title, bookId, setFetch) => {
  try {
    await axios.put(
      `https://test.flipnow.net/word/book/${bookId}`,
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

export const putLanguage = async (accessToken, language, bookId, setFetch) => {
  try {
    await axios.put(
      `https://test.flipnow.net/word/language/${bookId}`,
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

export const deleteBook = async (accessToken, bookId, setFetch) => {
  try {
    await axios.delete(`https://test.flipnow.net/word/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const postWord = async (accessToken, bookId, setFetch) => {
  try {
    await axios.post(
      `https://test.flipnow.net/word/book/${bookId}`,
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
  accessToken,
  bookId,
  wordId,
  text,
  meaning,
  setFetch
) => {
  try {
    await axios.put(
      `https://test.flipnow.net/word/${bookId}/${wordId}`,
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
  accessToken,
  srcBookId,
  desBookId,
  wordId,
  text,
  meaning,
  setFetch
) => {
  try {
    await axios.post(
      `https://test.flipnow.net/word/book/${desBookId}`,
      {
        wordInfo: [{ text, meaning }],
      },
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
    await axios.delete(`https://test.flipnow.net/word/${srcBookId}/${wordId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setFetch((prev) => !prev);
  } catch (e) {
    console.log(e);
  }
};

export const deleteWord = async (accessToken, bookId, wordId, setFetch) => {
  try {
    await axios.delete(`https://test.flipnow.net/word/${bookId}/${wordId}`, {
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
