import { SortOption } from 'constants/constants'
import "./sorting.scss";

type SortingProps = {
  sortBy?: SortOption,
  onClick: (option: SortOption) => void,
}

const SortOptionLabel = {
  [SortOption.City]: 'по городу',
  [SortOption.Company]: 'по компании',
}

export default function Sorting(props: SortingProps): JSX.Element {
  const { sortBy, onClick } = props;

  return (
    <div className='sorting'>
      <h2 className="sorting__title">Сортировка</h2>
      <ul className="sorting__list">
        {Object.values(SortOption).map((option) => {
          const isSelected = sortBy === option;

          return (
            <li
              key={option}
              onClick={() => onClick(option)}
              style={{ pointerEvents: isSelected ? 'none' : 'auto' }}
            >
              <span
                className={`sorting__item ${isSelected ? 'sorting__item--active' : ''}`}
              >
                  {SortOptionLabel[option]}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}