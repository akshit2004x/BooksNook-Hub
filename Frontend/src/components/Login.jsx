import React from 'react';
import log_img from "../../public/Log_img.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    {
      const res = await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
      
      if (res.data.user) {
        toast.success('Login Successfully!');
        navigate('/');
        window.location.reload();
      }
      else
      {
        toast.error(res.data.message);
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));

      }).catch((err) => {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
        console.log(err);
        }
      });
    }
  }
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${log_img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login <a href="/"><FaArrowLeft /></a></h2>
        <form   onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="you@example.com"

              {...register("email", { required: true })}
            />

            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="********"

              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>

          <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Log in
          </button>
          <div className='mt-5 justify-center text-center'>
            <p>Not Registered here:{" "}<span><a href="/signup  ">Sign{" "}up</a></span></p>
            
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
