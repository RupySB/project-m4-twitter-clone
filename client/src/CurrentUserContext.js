// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { CurrentUserContext } from "./Profile";

// export const CurrentUserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = React.useState(null);
//   const [status, setStatus] = React.useState("loading");

//   // Fetch the user data from the API (/me/profile)
//   fetch("/api/me/profile").then((data) => {
//     console.log("got data", data);
//     setCurrentUser(data);
//   });
//   React.useEffect(() => {
//     fetch("/api/me/profile").then((data) => {
//       console.log("got data", data);
//       setCurrentUser(data);
//     });
//     return JSON.stringify(currentUser, null, "loading");
//   }, [currentUser]);
//   // When the data is received, update currentUser.
//   // Also, set `status` to `idle`

//   return (
//     <CurrentUserContext.Provider value={{ currentUser, status }}>
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };

// export default CurrentUserProvider;

// //wrap PROVIDER in app in SRC/index.js + consume in App if status=loading
