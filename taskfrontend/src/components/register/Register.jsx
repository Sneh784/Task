import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
   const response = await axios.post(
  "http://localhost:5000/api/register",
  {
    email,
    password,
  }
);

      if (response.data.success) {
        alert("Account Created Successfully");
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Register Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register a new account
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
         Register
          </button>
        </div>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?
          <Link
            to="/"
            className="text-blue-600 font-medium ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;