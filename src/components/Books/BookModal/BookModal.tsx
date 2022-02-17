import React, { FC } from 'react';
import { useTypedSelector } from '../../../store/selectors';
import { useDispatch } from 'react-redux';
import { setModalMode } from '../../../store/book/actions';
import { MODAL_MODE } from '../../../store/book/types';

import { FaWindowClose } from 'react-icons/fa';
import './BookModal.scss';
import FadeInLeft from '../../gsap/FadeInLeft';

const BookModal: FC = () => {
  // state from store
  const { currentBook, modalMode } = useTypedSelector((state) => state.book);
  const dispatch = useDispatch();

  // close modal book
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    const target = event.target as Element;
    if (target.classList.contains('BookModal') || target.classList.contains('BookModal-close')) {
      dispatch(setModalMode(MODAL_MODE.NO_MODE));
    }
  };

  // check modal mode
  if (modalMode !== MODAL_MODE.BOOK_MODE) return <></>;

  return (
    <>
      {currentBook && (
        <div className="BookModal" onClick={onClickHandler}>
          <FadeInLeft>
            <div className="BookModal-content">
              {/* button close modal book */}
              <div className="BookModal-close" onClick={onClickHandler}>
                <FaWindowClose
                  size={'1.5rem'}
                  className="BookModal-close"
                  onClick={onClickHandler}
                />
              </div>

              <div className="BookModal-content__logo">
                {/* image */}
                {currentBook.volumeInfo.imageLinks && (
                  <img
                    className="BookModal-content__logo_img"
                    src={currentBook.volumeInfo.imageLinks.smallThumbnail}
                    alt={`${currentBook.volumeInfo.title} image`}
                  ></img>
                )}
              </div>

              <div className="BookModal-content__info">
                {/* title */}
                {currentBook.volumeInfo.title && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Title:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.title}
                    </div>
                  </div>
                )}
                {/* author */}
                {currentBook.volumeInfo.authors && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Author:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.authors.map((elem: string, i: number) => {
                        return i === 0 ? elem : `, ${elem}`;
                      })}
                    </div>
                  </div>
                )}
                {/* category */}
                {currentBook.volumeInfo.categories && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Category:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.categories.map((elem: string, i: number) => {
                        return i === 0 ? elem : `, ${elem}`;
                      })}
                    </div>
                  </div>
                )}
                {/* type */}
                {currentBook.volumeInfo.type && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Type:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.type}
                    </div>
                  </div>
                )}
                {/* date */}
                {currentBook.volumeInfo.publishedDate && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Date:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.publishedDate}
                    </div>
                  </div>
                )}
                {/* publisher */}
                {currentBook.volumeInfo.publisher && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Publisher:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.publisher}
                    </div>
                  </div>
                )}
                {/* language */}
                {currentBook.volumeInfo.language && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Language:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.language.toUpperCase()}
                    </div>
                  </div>
                )}
                {/* pages */}
                {currentBook.volumeInfo.pageCount && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Pages:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.pageCount}
                    </div>
                  </div>
                )}
                {/* description */}
                {currentBook.volumeInfo.description && (
                  <div className="BookModal-content__info_item">
                    <div className="BookModal-content__info_label">Description:</div>
                    <div className="BookModal-content__info_text">
                      {currentBook.volumeInfo.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeInLeft>
        </div>
      )}
    </>
  );
};

export default BookModal;
