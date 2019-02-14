import React from "react";

// A (optionally) globally available js object (or array, string etc.). You decide where it is available.
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
