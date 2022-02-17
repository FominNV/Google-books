import { FC } from 'react';
import Header from '../../Header/Header';
import { BookList } from '../../Books/BookList/BookList';
import BookModal from '../../Books/BookModal/BookModal';

import './Main.scss';

const Main: FC = () => {
  return (
    <div className="Main">
      <Header />
      <BookList />
      <BookModal />
    </div>
  );
};

export default Main;
