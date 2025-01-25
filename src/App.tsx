import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import React from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type Props = {
  goods: string[];
}



export const App: React.FC<Props> = () => {
  let goods = [...goodsFromServer];
  const [ sortType, setSortType ] = useState(0);
  const [ isReversed, setIsReversed ] = useState(false);
  const reset = () => {
    setSortType(0);
    setIsReversed(false)
  }

  if (sortType === 1) {
    goods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === 2) {
    goods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    goods.reverse();
  }

  return (
    <div className="section content">
        <div className="buttons">
          <button
            onClick={() => setSortType(1)}
            type="button"
            className={
              sortType === 1 ? 'button is-info ' : 'button is-info is-light'
            }
          >
            Sort alphabetically
          </button>

          <button
          onClick={() => setSortType(2)}
            type="button"
            className={
              sortType === 2
                ? 'button is-success'
                : 'button is-success is-light'
            }
          >
            Sort by length
          </button>

          <button
          onClick={() => setIsReversed(reversed => !reversed)}
            type="button"
            className={
              isReversed ? 'button is-warning' : 'button is-warning is-light'
            }
          >
            Reverse
          </button>

          {isReversed || sortType !== 0 ? (
            <button
              onClick={reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          ) : null}
        </div>

        <ul>
          <ul>
            {goods.map(good => {
              return (
                <li key={`${good}`} data-cy="Good">
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
  );
};
