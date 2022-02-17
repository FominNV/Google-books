export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: { smallThumbnail: string; thumbnail: string };
    publishedDate: string;
    description: string;
    pageCount: number;
    language: string;
    publisher: string;
    type: string;
  };
}

export interface IBookState {
  books: IBook[] | [];
  fetchMode: FETCH_MODE;
  orderMode: ORDER_MODE;
  categoryMode: CATEGORY_MODE;
  searchBody: string;
  currentBook: IBook | undefined;
  modalMode: MODAL_MODE;
  totalResult: number;
}

export enum BookActionTypes {
  GET_BOOKS = 'GET_BOOKS',
  LOAD_MORE_BOOKS = 'LOAD_MORE_BOOKS',
  SET_ORDER_MODE = 'SET_ORDER_MODE',
  SET_CATEGORY_MODE = 'SET_CATEGORY_MODE',
  SET_FETCH_MODE = 'SET_FETCH_MODE',
  SET_SEARCH_BODY = 'SET_SEARCH_BODY',
  SET_CURRENT_BOOK = 'SET_CURRENT_BOOK',
  SET_MODAL_MODE = 'SET_MODAL_MODE',
}

export enum URLS {
  GET_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes',
}

export enum FETCH_MODE {
  NO_FETCH = 'NO_FETCH',
  FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
}

export enum MODAL_MODE {
  NO_MODE = 'NO_MODE',
  BOOK_MODE = 'BOOK_MODE',
}

export type fetchOptions = {
  method: FETCH_METHOD;
  headers: { 'Content-Type': string; Authorization?: string };
  body?: string;
};

export enum FETCH_METHOD {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum ORDER_MODE {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}

export enum CATEGORY_MODE {
  ALL = 'all',
  ART = 'art',
  BIOGRATHY = 'biography',
  COMPUTERS = 'computers',
  HISTORY = 'history',
  MEDICAL = 'medical',
  POETRY = 'poetry',
}

type GetBooksAction = {
  type: BookActionTypes.GET_BOOKS;
  payload: { books: IBook[]; fetchMode: FETCH_MODE; totalResult: number };
};

type LoadMoreBooksAction = {
  type: BookActionTypes.LOAD_MORE_BOOKS;
  payload: { books: IBook[]; fetchMode: FETCH_MODE };
};

type SetOrderMode = {
  type: BookActionTypes.SET_ORDER_MODE;
  payload: { orderMode: ORDER_MODE };
};

type SetCategoryMode = {
  type: BookActionTypes.SET_CATEGORY_MODE;
  payload: { categoryMode: CATEGORY_MODE };
};

type SetFetchMode = {
  type: BookActionTypes.SET_FETCH_MODE;
  payload: { fetchMode: FETCH_MODE };
};

type SetSearchBody = {
  type: BookActionTypes.SET_SEARCH_BODY;
  payload: { searchBody: string };
};

type SetCurrentBook = {
  type: BookActionTypes.SET_CURRENT_BOOK;
  payload: { currentBook: IBook };
};

type SetModalMode = {
  type: BookActionTypes.SET_MODAL_MODE;
  payload: { modalMode: MODAL_MODE };
};

export type BookAction =
  | GetBooksAction
  | SetOrderMode
  | SetCategoryMode
  | SetFetchMode
  | LoadMoreBooksAction
  | SetSearchBody
  | SetCurrentBook
  | SetModalMode;
