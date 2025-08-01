import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import logo from "../assets/medium.png"

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center">
        <div className="flex gap-2 items-center px-4 sm:px-8 lg:px-10 mb-4">
          <img className="w-8 h-8" src={logo} alt="" />
          <span className="text-xl sm:text-2xl font-bold font-mono">Medium</span>
        </div>
        <Auth type="signup" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
