import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const users = JSON.parse(localStorage.getItem("user"));
  console.log("In Home", users);

  const logout = () => {
    localStorage.clear("user");
    navigate("/loginpage");
  };
  
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center flex-col">
      <div>
        <h1 className="text-yellow-300 font-medium text-4xl underline">
          Home Page
        </h1>
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-6 select-none rounded focus:outline-none focus:shadow-outline-red"
        onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
