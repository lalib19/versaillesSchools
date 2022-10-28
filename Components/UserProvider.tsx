import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import SignIn from '../Screens/SignIn';

export interface userProps {
  name: string;
  auth: boolean;
}

export interface valueProps {
  user: userProps;
  login: (name: string) => void;
  logout: () => void;
}

export const UserContext = createContext({name: 'a', auth: false});
export default function UserProvider() {
  const [user, setUser] = useState<userProps>({name: 'b', auth: true});


  const login = (name: string) => {
    setUser(user => ({
      name: name,
      auth: true,
    }));
  };

  const logout = () => {
    setUser(user => ({
      name: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      <SignIn/>
    </UserContext.Provider>
  );
}
