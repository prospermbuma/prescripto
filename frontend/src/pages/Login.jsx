import React, { useEffect, useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    onSubmitHandler();
  }, [name, email, password])

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className={`flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-blue-50 rounded-xl text-zinc-600 text-sm shadow-lg transition-all duration-500 ${state === 'Sign Up' ? 'translate-y-0' : 'translate-y-5'}`}>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment</p>
        {/* == Full Name == */}
        {
          state === 'Sign Up' &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-0' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }
        {/* == Email == */}
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-0' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>
        {/* == Password == */}
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-0' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer border border-blue-100 hover:text-primary hover:bg-blue-50 transition-all duration-300'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary cursor-pointer'>Login here</span></p>
            : <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer'>Sign Up here</span></p>
        }
      </div>
    </form>
  )
}

export default Login