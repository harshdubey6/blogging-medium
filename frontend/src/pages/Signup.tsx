import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import logo from "../assets/medium.png"

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="order-2 lg:order-1">
        <div className="flex gap-2 items-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          <img className="w-6 h-6 sm:w-8 sm:h-8 mt-2" src={logo} alt="" />
          <span className="text-xl sm:text-2xl font-bold font-mono mt-2">Medium</span>
        </div>
        <Auth type="signup" />
      </div>
      <div className="order-1 lg:order-2">
        <Quote />
      </div>
    </div>
  );
};
