import React from "react";
import { Link } from "react-router";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { register, handleSubmit, 
    formState: { errors }, } = useForm();
const handleLogIn=(data)=>{
console.log('handleLogIn',data);

};
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className=''>
        <h1 className='text-2xl font-semibold text-center mb-5'>Log In Now!</h1>
        <div className='card bg-base-100 w-96 shrink-0 shadow-2xl'>
          <div className='card-body'>
            <form onSubmit={handleSubmit(handleLogIn)} className='fieldset'>
              <label className='label'>Email</label>
              <input 
              {...register("email", 
                { required: "Email is Required",})}
              name="email"
              type='email' 
              className='input' 
              placeholder='Email' />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <label className='label'>Password</label>
              <input 
              {...register("password", 
                { required: "Password is Required",
                })}
              type='password' 
              className='input' 
              placeholder='Password' />
              <div>
                <a className='link link-hover'>
                  New to Website?
                  <Link className='text-secondary' to='/sign-up'>
                    Please Sign Up
                  </Link>
                </a>
              </div>
              <input
                type='submit'
                value='Log In'
                className='btn btn-primary mt-4'
              />
            </form>
            <button
              type='submit'
              value='Log In'
              className='btn btn-primary mt-4'
            >
              <img className='w-8 h-8 me-2' src={google} alt='' /> Continue With
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
