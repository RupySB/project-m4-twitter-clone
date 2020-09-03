import React, { useState, useEffect } from "react";
import { CurrentUserProvider } from "./CurrentUserContext";
import Sidebar from "./Sidebar";

const HomeFeed = () => {
  return (
    <>
      <Sidebar />
      <div>Home Feed</div>
    </>
  );
};

export default HomeFeed;
