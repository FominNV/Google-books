import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setOrderMode } from '../../../store/book/actions';
import { ORDER_MODE } from '../../../store/book/types';

import './OrderSelect.scss';

interface IOption {
  readonly value: ORDER_MODE;
  readonly label: string;
}

interface IOrderSelectProps {
  defaultValue: ORDER_MODE;
}

const orderOptions: IOption[] = [
  { value: ORDER_MODE.RELEVANCE, label: 'Relevance' },
  { value: ORDER_MODE.NEWEST, label: 'Newest' },
];

const OrderSelectInner: FC<IOrderSelectProps> = ({ defaultValue }) => {
  const dispatch = useDispatch();

  // set order mode
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.currentTarget.options.selectedIndex;
    dispatch(setOrderMode(event.currentTarget.options[selectedIndex].value as ORDER_MODE));
  };

  return (
    <div className="OrderSelect">
      <div className="OrderSelect-label">Order</div>

      <select className="OrderSelect-select" defaultValue={defaultValue} onChange={onChangeHandler}>
        {/* create options */}
        {orderOptions.map((elem: IOption, i: number) => (
          <option className="OrderSelect-option" key={i} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const OrderSelect = React.memo(OrderSelectInner);
