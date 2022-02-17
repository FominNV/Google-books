import {
  BookAction,
  BookActionTypes,
  FETCH_MODE,
  CATEGORY_MODE,
  IBookState,
  ORDER_MODE,
  MODAL_MODE,
} from './types';

const initialState: IBookState = {
  books: [],
  fetchMode: FETCH_MODE.NO_FETCH,
  orderMode: ORDER_MODE.RELEVANCE,
  categoryMode: CATEGORY_MODE.ALL,
  searchBody: '',
  currentBook: undefined,
  modalMode: MODAL_MODE.NO_MODE,
  totalResult: 0,
};

export function bookReducer(state: IBookState = initialState, action: BookAction): IBookState {
  switch (action.type) {
    case BookActionTypes.GET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
        fetchMode: action.payload.fetchMode,
        totalResult: action.payload.totalResult,
      };

    case BookActionTypes.LOAD_MORE_BOOKS:
      const newBooks = [...state.books, ...action.payload.books];
      return {
        ...state,
        books: newBooks,
        fetchMode: action.payload.fetchMode,
      };

    case BookActionTypes.SET_ORDER_MODE:
      return {
        ...state,
        orderMode: action.payload.orderMode,
      };

    case BookActionTypes.SET_CATEGORY_MODE:
      return {
        ...state,
        categoryMode: action.payload.categoryMode,
      };

    case BookActionTypes.SET_FETCH_MODE:
      return {
        ...state,
        fetchMode: action.payload.fetchMode,
      };

    case BookActionTypes.SET_SEARCH_BODY:
      return {
        ...state,
        searchBody: action.payload.searchBody,
      };

    case BookActionTypes.SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.payload.currentBook,
      };

    case BookActionTypes.SET_MODAL_MODE:
      return {
        ...state,
        modalMode: action.payload.modalMode,
      };

    default:
      return state;
  }
}
