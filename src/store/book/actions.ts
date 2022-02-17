import { Dispatch } from 'redux';
import fetchAction from './fetchAction';
import { createFetchOptions } from './createFetchOptions';
import {
  BookAction,
  BookActionTypes,
  FETCH_MODE,
  CATEGORY_MODE,
  ORDER_MODE,
  URLS,
  IBook,
  MODAL_MODE,
} from './types';
import { Common } from '../common';

// get books
export const getBooks =
  (searchBody: string, category: CATEGORY_MODE, order: ORDER_MODE) =>
  async (dispatch: Dispatch<BookAction>) => {
    const { getBooksOptions } = createFetchOptions();
    const queryCategory = category === CATEGORY_MODE.ALL ? '' : `+categories:${category}`;
    const querySearch = `?q=${searchBody}`;
    const queryOrder = `&orderBy=${order}`;
    const queryMaxResult = '&maxResults=30';

    const url =
      URLS.GET_BOOKS_URL +
      querySearch +
      queryCategory +
      queryOrder +
      Common.API_KEY +
      queryMaxResult;

    const { data, error } = await fetchAction(url, getBooksOptions());

    if (error) {
      throw new Error("Can't get books: " + error);
    }

    dispatch({
      type: BookActionTypes.GET_BOOKS,
      payload: { books: data.items, fetchMode: FETCH_MODE.NO_FETCH, totalResult: data.totalItems },
    });
  };

// load more books
export const loadMoreBooks =
  (searchBody: string, category: CATEGORY_MODE, order: ORDER_MODE, startIndex: number) =>
  async (dispatch: Dispatch<BookAction>) => {
    const { getBooksOptions } = createFetchOptions();
    const querySearch = `?q=${searchBody}`;
    const queryOrder = `&orderBy=${order}`;
    const queryCategory = category === CATEGORY_MODE.ALL ? '' : `+categories:${category}`;
    const queryMaxResult = '&maxResults=30';
    const queryStartIndex = `&startIndex=${startIndex}`;

    const url =
      URLS.GET_BOOKS_URL +
      querySearch +
      queryCategory +
      queryOrder +
      Common.API_KEY +
      queryMaxResult +
      queryStartIndex;

    const { data, error } = await fetchAction(url, getBooksOptions());

    if (error) {
      throw new Error("Can't get books: " + error);
    }

    dispatch({
      type: BookActionTypes.LOAD_MORE_BOOKS,
      payload: { books: data.items, fetchMode: FETCH_MODE.NO_FETCH },
    });
  };

// set order mode
export const setOrderMode = (mode: ORDER_MODE) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_ORDER_MODE,
    payload: { orderMode: mode },
  });
};

// set category mode
export const setCategoryMode = (mode: CATEGORY_MODE) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_CATEGORY_MODE,
    payload: { categoryMode: mode },
  });
};

// set fetch mode
export const setFetchMode = (mode: FETCH_MODE) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_FETCH_MODE,
    payload: { fetchMode: mode },
  });
};

// set search body
export const setSearchBody = (text: string) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_SEARCH_BODY,
    payload: { searchBody: text },
  });
};

// set current book
export const setCurrentBook = (book: IBook) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_CURRENT_BOOK,
    payload: { currentBook: book },
  });
};

// set modal mode
export const setModalMode = (mode: MODAL_MODE) => async (dispatch: Dispatch<BookAction>) => {
  dispatch({
    type: BookActionTypes.SET_MODAL_MODE,
    payload: { modalMode: mode },
  });
};
