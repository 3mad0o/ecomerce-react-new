import React from 'react'
import { Link, useSearchParams } from 'react-router';



export const StatusesBox = ({statuses}) => {
       const [searchParams, setSearchParams] = useSearchParams();
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 '>
        {statuses.map((status) => (
          <Link
          to={`/orders?status=${status.value}`}
          key={status.value} className={`${searchParams.get('status') == status.value ? 'bg-black text-white' :""} border border-gray-200 text-black  p-2 m-1 rounded-md shadow-sm hover:bg-opacity-80 transition duration-200 cursor-pointer`}>
            {status.label} 
            </Link>
        ))}


    </div>
  )
}
