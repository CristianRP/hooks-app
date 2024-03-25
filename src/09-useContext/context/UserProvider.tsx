import { RoutesProps } from 'react-router-dom';

import { User, UserContext } from './UserContext'
import { useState } from 'react';

// const user = {
//   id: 123,
//   name: 'Cristian Ramirez',
//   email: 'cristian@gmail.com',
// }

export const UserProvider = ({ children }: RoutesProps) => {

  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
