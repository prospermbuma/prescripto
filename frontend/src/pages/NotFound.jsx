import React from 'react'

const NotFound = () => {
  return (
    <div className='mt-10 sm:mt-20'>
      <div className='w-full h-auto rounded-2xl py-10 sm:py-10 text-center border border-blue-100 text-primary bg-blue-50'>
        <p className='text-xl sm:text-3xl'>
          <span>404</span>
          <br />
          <b className='text-3xl md:text-5xl'>NOT FOUND</b>
          <br />
          <small>Page does not exist.</small>
        </p>
      </div>
    </div>
  )
}

export default NotFound