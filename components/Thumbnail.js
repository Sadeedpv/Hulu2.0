import React from 'react';
import Image from 'next/image'

const Thumbnail = ({item}) => {
  return (
    <div className='p-2 group cursor-pointer transition duration-150 ease-in transform sm:hover:scale-105 hover:z-150'>
        <Image 
        src={item.imageurl[0] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv453LSZFJJFCO2U7yFTAHJms0XD2CgQF7Q&usqp=CAU'}
        layout='responsive'
        height={680}
        width={820}
        alt='Thumbnail'
        />
        <div className='p-2'>
            <p className='truncate max-w-md'>{item.synopsis}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 
            ease-in-out group-hover:font-bold'>{item.title}</h2>
            <div className='flex justify-between opacity-75 p-1'>imdbRating: {item.imdbrating || 'Uknown'}<p> released:{item.released}</p></div>
        </div>
    </div>
  )
}

export default Thumbnail