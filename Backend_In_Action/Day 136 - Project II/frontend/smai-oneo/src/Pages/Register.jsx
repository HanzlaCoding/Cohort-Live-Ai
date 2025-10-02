import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [register, setRegister] = useState(null);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);

    axios
      .post("http://localhost:3000/api/auth/register", formData)
      .then((response) => {
        console.log("Registration Successful:", response.data);
        navigate("/login");
        setRegister(response);
      })
      .catch((error) => {
        console.error(
          "Registration Error:",
          error.response ? error.response.data.message : error.message
        );
        setRegister(error.response);
      });
  };

  return (
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
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition duration-200"
          >
            Register
          </button>

          <div className="error">
            <p className="text-sm text-red-500 mt-2 text-center">
              {register && register.status !== 200
                ? register.data.message
                : ""}
            </p>
          </div>

          <div className="register-here">
            <p className="text-sm text-gray-600 mt-4 text-center">
              Already have an account?
              <br />
              <Link to="/" className="text-purple-600 hover:underline">
                Login Here.
              </Link>
            </p>
          </div>

          <div className="register-here">
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don't remember your password?
              <br />
              <Link to="/" className="text-purple-600 hover:underline">
                Reset your password?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
