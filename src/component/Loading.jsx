import React from 'react'

function Loading() {
  return (
    <div  className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div className="lds-ripple"><div></div><div></div></div>
    <p className='text-white'>Please Wait ... </p>
     </div>
  )
}

export default Loading