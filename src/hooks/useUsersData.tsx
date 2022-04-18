import { useEffect, useState } from "react";
import { fetchUsers } from "api";
import { UserType } from "types/types";

export default function useUsersData() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async() => {
      const users = await fetchUsers();
      setUsers(users);
    }

    getUsers();

  }, [setUsers]);

  return users;
}