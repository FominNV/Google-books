import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryMode } from '../../../store/book/actions';
import { CATEGORY_MODE } from '../../../store/book/types';

import './CategorySelect.scss';

interface IOption {
  readonly value: CATEGORY_MODE;
  readonly label: string;
}

interface ICategorySelectProps {
  defaultValue: CATEGORY_MODE;
}

const categoryOptions: IOption[] = [
  { value: CATEGORY_MODE.ALL, label: 'All' },
  { value: CATEGORY_MODE.ART, label: 'Art' },
  { value: CATEGORY_MODE.BIOGRATHY, label: 'Biography' },
  { value: CATEGORY_MODE.COMPUTERS, label: 'Computers' },
  { value: CATEGORY_MODE.HISTORY, label: 'History' },
  { value: CATEGORY_MODE.MEDICAL, label: 'Medical' },
  { value: CATEGORY_MODE.POETRY, label: 'Poetry' },
];

const CategorySelectInner: FC<ICategorySelectProps> = ({ defaultValue }) => {
  const dispatch = useDispatch();

  // set category mode
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.currentTarget.options.selectedIndex;
    dispatch(setCategoryMode(event.currentTarget.options[selectedIndex].value as CATEGORY_MODE));
  };

  return (
    <div className="CategorySelect">
      <div className="CategorySelect-label">Categories</div>
      <select
        className="CategorySelect-select"
        defaultValue={defaultValue}
        onChange={onChangeHandler}
      >
        {/* create options */}
        {categoryOptions.map((elem: IOption, i: number) => (
          <option className="CategorySelect-option" key={i} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const CategorySelect = React.memo(CategorySelectInner);
