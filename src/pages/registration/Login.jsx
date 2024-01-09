import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const users=localStorage.setItem('user',JSON.stringify(user))
      alert("Signin Successful");
      navigation("/home");
      setEmail("");
      setPassword("");
      console.log("In Login ,Email:", email);
      console.log("In Login ,Password:", password);
    } catch (error) {
      alert("Invalid email or password");
      console.log(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="container w-96 mt-10 p-7 border-2 bg-white rounded-md">
      <form onSubmit={handleLogin}>
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-600 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            required
            autoComplete="on" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xl font-medium text-gray-600"
          >
            Password
          </label>
          <div className="">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              required
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              className="form-checkbox h-5 w-5 text-blue-500"
              onChange={handleTogglePassword}
            />
            <label
              htmlFor="showPassword"
              className="ml-2 text-lg font-medium text-gray-600">
              Show Password
            </label>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <button
            className="w-64 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit">
            Login
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="bg-green-500 w-64 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 "
           onClick={()=>navigation('/')}>
           Go To Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
