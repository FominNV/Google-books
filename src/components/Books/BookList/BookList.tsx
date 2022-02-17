import { FC, memo, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../store/selectors';
import { useDispatch } from 'react-redux';
import { setCurrentBook, setModalMode } from '../../../store/book/actions';
import { FETCH_MODE, IBook, MODAL_MODE } from '../../../store/book/types';

import { BookCard } from '../BookCard/BookCard';
import Container from '../../Container/Container';
import LoadMoreBtn from '../../buttons/LoadMoreBtn/LoadMoreBtn';
import ReactLoading from 'react-loading';

import './BookList.scss';

const BookListInner: FC = () => {
  // states from store
  const { books, fetchMode } = useTypedSelector((state) => state.book);
  const dispatch = useDispatch();

  // fetch result state
  const [noResults, setNoResults] = useState<boolean>(false);

  // create list of books
  const showBooks = () => {
    return books.map((elem: IBook, i: number) => (
      <BookCard key={i} book={elem} selectBook={selectBook} />
    ));
  };

  // set current book if link the card
  const selectBook = (id: string, event?: React.MouseEvent<HTMLDivElement>) => {
    books.map((elem: IBook) => {
      if (elem.id === id) {
        dispatch(setCurrentBook(elem));
        dispatch(setModalMode(MODAL_MODE.BOOK_MODE));
      }
    });
  };

  // manage fetch result state
  useEffect(() => {
    if (fetchMode === FETCH_MODE.FETCHING) {
      setNoResults(false);
    }
    if (!books && fetchMode === FETCH_MODE.FETCHED) {
      setNoResults(true);
    }
  }, [fetchMode]);

  return (
    <Container>
      <div className="BookList">
        {noResults && <div className="BookList-noresults">No results</div>}

        {books && showBooks()}

        {fetchMode === FETCH_MODE.FETCHING && (
          <div className="BookList-loading">
            <ReactLoading type={'spin'} color={'aqua'} height={50} width={50} />
          </div>
        )}

        <LoadMoreBtn />
      </div>
    </Container>
  );
};

function areEqual(prev: any, next: any) {
  return prev.books === next.books;
}

export const BookList = memo(BookListInner);
