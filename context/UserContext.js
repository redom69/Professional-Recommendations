import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const mockUser = {
    id: 1,
    name: 'Daniel Hernández',
    photo: 'https://i.pravatar.cc/150?u=daniel',
    position: 'FullStack Developer',
    company: 'Freelance',
  };

  return (
    <UserContext.Provider value={{ mockUser }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export { UserContext };
