import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPopup from "../components/ErrorPopup";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [register, setRegister] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerSuccessfully = () => {
    localStorage.setItem("token", register?.data?.token);
    console.log(register);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerResponse = await axios
      .post(import.meta.env.VITE_AUTH_API_URL + "/register", formData)
      .then((response) => {
        console.log("Registration Successful:", response.data);
        registerSuccessfully();
        return response; // Return full response, not just response.data
      })
      .catch((error) => {
        console.error(
          "Registration Error:",
          error.response ? error.response.data.message : error.message
        );
        return error.response;
      });

    setRegister(registerResponse);
  };

  console.log(register);

  return (
    <>
      {register && register.data && (
        <ErrorPopup popupErr={register.data.message} status={false} />
      )}

      {register && register.status === 201 && (
        <ErrorPopup popupErr={register.data.message} status={true} />
      )}

      <div className="min-h-screen flex items-center justify-center bg-purple-100">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
            Register
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
                placeholder="Choose username"
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
                placeholder="Choose password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition duration-200 cursor-pointer"
            >
              Register
            </button>

            <div className="register-here ">
              <p className="text-sm tracking-tighter text-gray-600 mt-4 text-center">
                Already have an account?
                <br />
                <Link to="/login" className="text-purple-600 hover:underline">
                  Login Here.
                </Link>
              </p>
            </div>

            {/* <div className="reset-password">
              <p className="text-sm tracking-tighter text-gray-600 mt-4 text-center">
                Don't remember your password?
                <br />
                <Link to="/" className="text-purple-600 hover:underline">
                  Reset your password?
                </Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
