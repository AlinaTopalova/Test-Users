import UserCard from "pages/main-page/components/user-card/user-card";
import { UserType } from "types/types";
import './user-cards.scss';

type UserCardsProps = {
  users: UserType[],
}

export default function UserCards(props: UserCardsProps): JSX.Element {
  const { users } = props;

  return (
    <div className='list__wrap'>
      <h1 className="list__title">Список пользователей</h1>
      <ul className="card__list">
        {users.map((user, index) => 
          <li key={index}>
            <UserCard user={user}/>
          </li>
        )}
      </ul>
    </div>
  )

}