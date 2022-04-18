import "./main-page.scss";
import React, { Suspense, useState } from "react";
import { SortOption } from "constants/constants";
import { sortUsers } from "utils/utils";
import useUsersData from "hooks/useUsersData";
import Loader from "shared/loader/loader";
import Sorting from "shared/sorting/sorting";

const UserCardsComponent = React.lazy(() => 
import('pages/main-page/components/user-cards/user-cards'));

export default function MainPage(): JSX.Element {
  const [sortBy, setSortBy] = useState<SortOption>();
  
  const sorteredUsers = sortUsers(useUsersData(), sortBy);
  
  return(
    <div className='container'>
      <Sorting
        sortBy={sortBy}
        onClick={setSortBy}
      />
      <Suspense fallback={<Loader />}>
        <UserCardsComponent users={sorteredUsers}/>
      </Suspense>
    </div>
  )
} 