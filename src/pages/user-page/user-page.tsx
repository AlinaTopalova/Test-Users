import "./user-page.scss";
import { fetchUser } from "api";
import { useEffect, useState } from "react";
import Sorting from "shared/sorting/sorting";
import { useParams } from "react-router";
import { UserType } from "types/types";
import UserForm from "./userForm/user-form";
import ScrollToTop from "scrollToTop/scrollToTop";

export default function UserPage(): JSX.Element {

  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const getUser = async(id: string) => {
      const currentUser = await fetchUser(id);
      setCurrentUser(currentUser);
    }
    userId && getUser(userId);
  }, [userId]);

  return (
    <>
      <ScrollToTop />
      <div className="container">
        <Sorting onClick={() => null}/>
        {currentUser && 
          <UserForm currentUser={currentUser}/>
        }
      </div>
    </>
  )
}