import React from "react";
import { Link } from "react-router";

const App = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-black">
      <Link to="/login" className="text-white"> Login </Link>
      <Link to="/homepage" className="text-white">HomePage</Link>
    </div>
  );
};

export default App;
