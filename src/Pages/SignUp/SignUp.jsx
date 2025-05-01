import React from "react";
import { Link } from "react-router";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, 
    formState: { errors }, } = useForm();
const handleSignUp=(data)=>{
console.log('handleSignUp',data);

};
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className=''>
        <h1 className='text-2xl font-semibold text-center mb-5'>Sign Up</h1>
        <div className='card bg-base-100 w-96 shrink-0 shadow-2xl'>
          <div className='card-body'>
            <form onSubmit={handleSubmit(handleSignUp)} className='fieldset'>
              <label className='label'>Name</label>
              <input
               {...register("name", 
                { required: "Name is Required",})}
               type='text' 
              className='input'
              placeholder='Name' />
               {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
                  minLength:{
                    value:6,
                    message:"Password should be six character"
                  },
                   pattern:{value:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/, message:"Password should be One uppercase, One lowercase and a special character with number"}
                })}
              type='password' 
              className='input' 
              placeholder='Password' />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

              <div>
                <a className='link link-hover'>
                  Already Have an Account?{" "}
                  <Link className='text-secondary' to='/login'>
                    Please Login
                  </Link>
                </a>
              </div>
              <input
                type='submit'
                value='Sign Up'
                className='btn btn-primary mt-4'
              />
            </form>
            <button
              type='submit'
              value='Sign Up'
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

export default SignUp;
