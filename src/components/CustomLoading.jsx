import React from 'react'

function CustomLoading({msg}) {
  return (
    <div className="w-full z-50 text-white flex-col flex justify-center  items-center min-h-[100vh] bg-black/50 fixed">
     <div class="lds-ripple"><div></div><div></div></div>
     <p className='font-semibold'>{msg} .. </p>
     </div>
  )
}

export default CustomLoading