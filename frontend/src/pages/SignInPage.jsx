import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { FiLoader } from "react-icons/fi";

const SignInPage = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const { login, isSigningIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="w-95 p-6 border-2 border-[#3E1671] rounded-[10px] flex flex-col gap-y-5"
      >
        <h1 className="text-xl font-semibold text-center mb-2">Sign In</h1>

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
          disabled={isSigningIn}
          type="submit"
          className="mt-3 h-10 rounded-[10px] border-2 border-[#3E1671] hover:bg-[#3E1671] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSigningIn ? (
            <FiLoader className="w-full h-5 animate-spin text-center" />
          ) : (
            "Sign In"
          )}
        </button>

        <p className="text-sm text-center text-gray-400 mt-2">
          Don’t have an account yet?{" "}
          <NavLink
            to={"/auth/signup"}
            className="text-[#8b5cf6] cursor-pointer hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
