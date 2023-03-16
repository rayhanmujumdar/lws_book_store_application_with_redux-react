import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-[90vh] flex-col gap-y-3'>
        <h1 className='text-3xl text-gray-400'>Page Not Found</h1>
        <Link to='/' className='bg-blue-500 px-3 py-1 rounded-md text-xl shadow-md text-white'>Home</Link>
    </div>
  )
}
