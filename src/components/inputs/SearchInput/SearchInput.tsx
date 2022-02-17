import React, { FC, useState } from 'react';
import { useTypedSelector } from '../../../store/selectors';
import { useDispatch } from 'react-redux';
import { getBooks, setFetchMode, setSearchBody } from '../../../store/book/actions';
import { FETCH_MODE } from '../../../store/book/types';

import { FaSearch } from 'react-icons/fa';
import './SearchInput.scss';

const SearchInput: FC = () => {
  // states from store
  const { categoryMode, orderMode, totalResult } = useTypedSelector((state) => state.book);
  const dispatch = useDispatch();

  // search text
  const [searchText, setSearchText] = useState<string>('');

  // set search body
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  // submit form
  const submitForm = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    if (!searchText.trim()) return;
    dispatch(setSearchBody(searchText));
    dispatch(setFetchMode(FETCH_MODE.FETCHING));
    dispatch(getBooks(searchText, categoryMode, orderMode));
  };

  return (
    <div className="SearchInput">
      <input name="search" className="SearchInput-inp" onChange={onChangeHandler} />

      {/* button - submit form */}
      <button className="SearchInput-btn" onClick={submitForm}>
        <FaSearch size={'1rem'} />
      </button>
      {/* result of fetching */}
      <div className="SearchInput-result">
        {totalResult > 0 &&
          (totalResult === 1 ? `${totalResult} result` : `${totalResult} results`)}
      </div>
    </div>
  );
};

export default SearchInput;
