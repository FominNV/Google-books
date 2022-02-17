import React, { FC } from 'react';

import { getBooks, setFetchMode, setSearchBody } from '../../../store/book/actions';
import { CATEGORY_MODE, FETCH_MODE, ORDER_MODE } from '../../../store/book/types';

import { CategorySelect } from '../../selects/CategorySelect/CategorySelect';
import { OrderSelect } from '../../selects/OrderSelect/OrderSelect';

import './SearchForm.scss';
import SearchInput from '../../inputs/SearchInput/SearchInput';

const SearchForm: FC = () => {
  return (
    <form className="SearchForm">
      <SearchInput />

      <div className="SearchForm-selects">
        <CategorySelect defaultValue={CATEGORY_MODE.ALL} />
        <OrderSelect defaultValue={ORDER_MODE.RELEVANCE} />
      </div>
    </form>
  );
};

// export const SearchForm = React.memo(SearchFormInner);
export default SearchForm;
