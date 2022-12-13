import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

/** information about the current user session */
export interface UserSessionData {
  id: number;
  accessToken: string;
}

/** the information provided by the context */
interface ApplicationContextValue {
  activeUser: UserSessionData | undefined;
  setActiveUser: Dispatch<SetStateAction<UserSessionData | undefined>>;
}

/** initialize context */
export const ApplicationContext = createContext<ApplicationContextValue>(
  {} as ApplicationContextValue,
);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [activeUser, setActiveUser] = useState<UserSessionData>();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const appContextValue = {
    activeUser,
    setActiveUser,
  };

  return (
    <ApplicationContext.Provider value={appContextValue}>
      {children}
    </ApplicationContext.Provider>
  );
}
