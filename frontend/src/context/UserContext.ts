import React, { createContext } from "react";
import { User } from "../data/users";

export type UserContextType = {
  user: User | undefined;
  setUser: (user: User) => void;
  jwt: string | undefined;
  setJwt: (token: string) => void;
};

/**
 * Allow all component to access user state.
 */
const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
  jwt: undefined,
  setJwt: () => {},
});

export default UserContext;
