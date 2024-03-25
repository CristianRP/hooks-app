import { Dispatch, SetStateAction, createContext } from 'react';

export type User = {
  id?: number;
  name?: string;
  email?: string;
}

export type UserContextValue = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>
}

export const UserContext = createContext<UserContextValue>({ user: {}, setUser: () => {} });
