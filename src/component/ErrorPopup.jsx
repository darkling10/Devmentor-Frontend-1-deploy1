import React from 'react'

function ErrorPopup({error}) {
  return (
    <div className='w-64 bg-red-200 text-red-600 px-5 absolute top-10 right-10 '>{error}</div>
  )
}

export default ErrorPopup;