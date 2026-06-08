import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response =
      await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password
        }
      );

      if(response.data.success){
        navigate("/home");
      }

    } catch(err) {

      alert("Login Failed");

    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleLogin}
      >
        Login
      </button>
    </>
  );
}

export default Login;