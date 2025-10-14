import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ErrorPopup from "../components/ErrorPopup";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, setLogin] = useState(null);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginSuccessfully = (response) => {
    console.log("Login Successful:", response.data);
    setResponse(response.data);

    document.cookie = `token=${response.data.token}; path=/;`; // Set cookie
    setUser(response.data.token);

    localStorage.setItem("token", response.data.token);
    console.log(response);
    
    setTimeout(() => {
      navigate("/user-profile");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await axios
      .post(import.meta.env.VITE_AUTH_API_URL + "/login", formData)
      .then((response) => {
        loginSuccessfully(response);
        return response;
      })
      .catch((error) => {
        console.error(
          "Login Error:",
          error.response ? error.response.data.message : error.message
        );
        return error.response;
      });

    setLogin(loginResponse);
  };

  return (
    <>
      {login && login.data && login.status !== 200 && (
        <ErrorPopup popupErr={login.data.message} status={false} />
      )}

      {login && login.status === 200 && (
        <ErrorPopup popupErr={login.data.message} status={true} />
      )}

      <div className="min-h-screen flex items-center justify-center bg-purple-100">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-gray-300 focus:border-purple-500 focus:ring-purple-500 px-4 py-2"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-gray-300 focus:border-purple-500 focus:ring-purple-500 px-4 py-2"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition duration-200 cursor-pointer"
            >
              Login
            </button>

            <div className="register-here">
              <p className="text-sm tracking-tighter text-gray-600 mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/" className="text-purple-600 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
