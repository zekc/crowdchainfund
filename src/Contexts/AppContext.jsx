import React from "react";
export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [subscribed, setSubscribed] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState({});

  const checkUser = (email, password) => {
    if (user.email === email && user.password === password) {
      setAuth(true);
      return true;
    }
    return false;
  };

  return (
    <AppContext.Provider
      value={{
        subscribed,
        setSubscribed,
        auth,
        setAuth,
        user,
        setUser,
        checkUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
