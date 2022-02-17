import React, { FC } from 'react';
import { IBook } from '../../../store/book/types';

import './BookCard.scss';

interface IBookCardProps {
  book: IBook;
  selectBook: (id: string, event?: React.MouseEvent<HTMLDivElement>) => void;
}

const BookCardInner: FC<IBookCardProps> = ({ book, selectBook }) => {
  return (
    <>
      {book && (
        <div className="BookCard" onClick={() => selectBook(book.id)}>
          <div className="BookCard-logo">
            {/* image */}
            {book.volumeInfo.imageLinks && (
              <img
                className="BookCard-logo__img"
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`${book.volumeInfo.title} image`}
              />
            )}
          </div>

          <div className="BookCard-info">
            {/* title */}
            {book.volumeInfo.title && (
              <div className="BookCard-info__item">
                <p className="BookCard-info__label">Title:</p>
                {book.volumeInfo.title}
              </div>
            )}
            {/* authors */}
            {book.volumeInfo.authors && (
              <div className="BookCard-info__item">
                <p className="BookCard-info__label">Author:</p>
                {book.volumeInfo.authors.map((elem: string, i: number) => {
                  return i === 0 ? elem : `, ${elem}`;
                })}
              </div>
            )}
            {/* category */}
            {book.volumeInfo.categories && (
              <div className="BookCard-info__item">
                <p className="BookCard-info__label">Category:</p>
                {book.volumeInfo.categories[0]}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

function areEqual(prev: IBookCardProps, next: IBookCardProps) {
  return prev.book === next.book;
}

export const BookCard = React.memo(BookCardInner, areEqual);
