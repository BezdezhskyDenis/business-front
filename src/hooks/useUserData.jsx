import { useEffect, useState } from "react";
import usersService from "../services/usersService";

export const useUserData = (id) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await usersService.getUserById(id);
      setUserData(data);
      
    };

    getUserData();
  }, [id]);
  return userData;
};
