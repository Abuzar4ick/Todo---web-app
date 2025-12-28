import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { FiLoader } from "react-icons/fi";

const SignUpPage = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(data);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="w-95 p-6 border-2 border-[#3E1671] rounded-[10px] flex flex-col gap-y-5"
      >
        <h1 className="text-xl font-semibold text-center mb-2">Sign Up</h1>

        <div className="flex flex-col gap-y-1">
          <label className="text-sm">Username</label>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className="h-10 rounded-[10px] px-3 border-2 border-[#3E1671] outline-none placeholder:text-[#777777] text-[16px]"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-sm">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="h-10 rounded-[10px] px-3 border-2 border-[#3E1671] outline-none placeholder:text-[#777777] text-[16px]"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-sm">Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="h-10 rounded-[10px] px-3 border-2 border-[#3E1671] outline-none placeholder:text-[#777777] text-[16px]"
            placeholder="••••••"
          />
        </div>

        <button
          disabled={isSigningUp}
          type="submit"
          className="mt-3 h-10 rounded-[10px] border-2 border-[#3E1671] hover:bg-[#3E1671] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSigningUp ? (
            <FiLoader className="w-full h-5 animate-spin text-center" />
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="text-sm text-center text-gray-400 mt-2">
          Already have an account?{" "}
          <NavLink
            to={"/auth/signin"}
            className="text-[#8b5cf6] cursor-pointer hover:underline"
          >
            Sign in
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
