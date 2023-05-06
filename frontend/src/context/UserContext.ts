import React, { createContext } from "react";
import { User } from "../data/users";

export type UserContextType = {
  user: User | undefined;
  setUser: (user: User) => void;
};

/**
 * Allow all component to access user state.
 */
const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

export default UserContext;
