import { useEffect, useState } from "react";
import usersService from "../services/usersService";

export const useUserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await usersService.getUserById();
      setUserData(data);
      
    };

    getUserData();
   
  }, []);
  return userData;
};
