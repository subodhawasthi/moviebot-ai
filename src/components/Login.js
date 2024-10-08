import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
             < img src='/images/netflix_bg.jpg' alt='bg' />
        </div>
        <form className='w-4/12 absolute p-12 py-4 bg-black mt-20 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already a user? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login