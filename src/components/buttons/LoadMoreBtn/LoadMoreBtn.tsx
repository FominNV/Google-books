import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../store/selectors';
import { useDispatch } from 'react-redux';
import { loadMoreBooks, setFetchMode } from '../../../store/book/actions';
import { FETCH_MODE } from '../../../store/book/types';

import './LoadMoreBtn.scss';

const LoadMoreBtn: FC = () => {
  // states from store
  const { books, categoryMode, orderMode, searchBody, fetchMode } = useTypedSelector(
    (state) => state.book,
  );
  const dispatch = useDispatch();

  // set visible/hide button
  const [visible, setVisible] = useState<boolean>(false);

  // save count of books
  const [countBooks, setCountBooks] = useState<number>(0);

  // load more books
  const onclickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(false);
    dispatch(setFetchMode(FETCH_MODE.FETCHING));
    dispatch(loadMoreBooks(searchBody, categoryMode, orderMode, countBooks));
  };

  // hide/visible load more button
  const checkCountBooks = () => {
    if (books.length && books.length % 30 === 0) {
      setVisible(true);
      setCountBooks((prev) => prev + 30);
    } else {
      setVisible(false);
    }
  };

  // check count of books
  useEffect(() => {
    if (books) {
      checkCountBooks();
    } else {
      setVisible(false);
    }
  }, [books]);

  // hide button if fetching
  useEffect(() => {
    if (fetchMode === FETCH_MODE.FETCHING) {
      setVisible(false);
    }
  }, [fetchMode]);

  return (
    <>
      {visible && (
        <button className="LoadMoreBtn" onClick={onclickHandler}>
          Load More
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
