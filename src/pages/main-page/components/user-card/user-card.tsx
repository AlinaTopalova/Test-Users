import { AppRoute } from 'constants/constants';
import { Link } from 'react-router-dom';
import { UserType } from 'types/types';
import './user-card.scss';

type UserCardProps = {
  user: UserType,
}

export default function UserCard(props: UserCardProps): JSX.Element {
  const { user } = props;

  return (
      <div className="card">
        <div className="card__row">
          <span className='card__fild'>ФИО:</span>
          <span className='card__info'>{user.name}</span>
        </div>
        <div className="card__row">
          <span className='card__fild'>город:</span>
          <span className='card__info'>{user.address.city}</span>
        </div>
        <div className="card__row">
          <span className='card__fild'>компания:</span>
          <span className='card__info'>{user.company.name}</span>
        </div>
        <Link to={`${AppRoute.Users}/${user.id}`} className='card__more'>Подробнее</Link>
      </div>
  )
}