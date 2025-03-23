import React from "react";
import { Link } from "react-router";

const App = () => {
  return (
    <div className="flex justify-center bg-black">
      <Link to="/login"> Login </Link>
    </div>
  );
};

export default App;
