import { SortOption } from "constants/constants";
import { UserType } from "types/types";

export const sortUsers = (users: UserType[], sortBy?: SortOption): UserType[] => {
  const usersCopy = [...users];
  switch (sortBy) {
    case SortOption.City:
      return usersCopy.sort((a, b) => 
      (b.address.city < a.address.city ? 1 : b.address.city > a.address.city ? -1 : 0));
    case SortOption.Company:
      return usersCopy.sort((a, b) => 
      (b.company.name < a.company.name ? 1 : b.company.name > a.company.name ? -1 : 0));
    default:
      return usersCopy;
  }
}
