import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      alert("Invalid Email or Password");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Login to your account
        </p>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         <button
  onClick={handleLogin}
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
>
  {loading ? "Logging in..." : "Login"}
</button>

<p className="text-center text-sm text-slate-600">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="text-blue-600 font-semibold hover:underline"
  >
    Register
  </Link>
</p>
        </div>

        

      </div>
      
    </div>
  );
}

export default Login;