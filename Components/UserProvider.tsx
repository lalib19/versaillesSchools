import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';

interface userProps {
    name: string,
    auth: boolean
}

interface valueProps {
    user: userProps,
    login: (name: string) => void,
    logout: () => void
}

export default function UserProvider() {
  const [user, setUser] = useState<userProps>({name: '', auth: true});

  const UserContext = createContext({name: '', auth: false});

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
      {children}
    </UserContext.Provider>
  );
}
