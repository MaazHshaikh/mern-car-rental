import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center bg-left py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556448851-9359658faa54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>

        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center pb-7">Sign In</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  type="text"
                  id="email"
                  onChange={handleChange}
                  required="required"
                  placeholder="Email ID"
                />
              </div>

              <div className="mb-3 space-y-2 w-full text-xs">
                <label className=" font-semibold text-gray-600 py-2">
                  Password
                </label>

                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <input
                    className="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                <button
                  disabled={loading}
                  className="mb-2 md:mb-0 bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                >
                  {loading ? "Signing In" : "Sign In"}
                </button>
                <OAuth />
              </div>
            </form>
            <div>
              <p className="text-xs font-semibold text-gray-600 py-2">
                Dont have an account?
              </p>
              <Link to={"/sign-up"}>
                <span className="text-s font-semibold py-2 text-blue-700 hover:text-blue-950">
                  Sign Up
                </span>
              </Link>
              {error && <p className="text-red-500 mt-5">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
