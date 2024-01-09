import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Signup Successful");
        navigation("/loginpage");
        setEmail("");
        setPassword("");
        console.log("In sign up , Password:-", password);
        console.log("In sign up , Email:-", email);
      } catch (error) {
        alert("Enter Valid Detail");
        console.log(`Login failed: ${error.message}`);
      }
    } else {
      alert("Password not matched");
    }
  };

  return (
    <div className="bg-white container w-96 mt-10 p-7 border-2 rounded-md">
      <form onSubmit={handleSignUp}>
        <h1 className="text-3xl text-center font-semibold mb-6">Sign Up</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600">
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
            className="block text-sm font-medium text-gray-600">
            Password
          </label>
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
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Confirm your password"
            value={confirmPassword}
            required
            autoComplete="on"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 flex items-center">
          <input
            type="checkbox"
            id="showPassword"
            className="form-checkbox h-5 w-5 text-blue-500"
            onChange={handleTogglePassword}/>
          <label
            htmlFor="showPassword"
            className="ml-2 text-md font-medium text-gray-600">
            Show Password
          </label>
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="bg-green-500 w-64 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 "
            type="submit">
            Sign Up
          </button>
        </div>
        <div className="flex justify-around items-center mt-3">
          <button
            className="w-64 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={()=>navigation('loginpage')}>
            Go To Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
