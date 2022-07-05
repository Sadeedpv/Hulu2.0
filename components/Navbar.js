import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import axios from 'axios';

export default function Navbar () {
  const router = useRouter();

  const [genre, setGenre] = React.useState([]);

  useEffect(() =>{
    const options2 = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/getParams',
    params: {param: 'genre'},
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_API_KEY,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  async function query(){
    const genres = await 
    axios.request(options2).then(res =>{
      return res.data;
    });
    setGenre(genres);
  }

  query();


  }, [])


  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
          {genre && genre.map((item, index) => {
            return <h2 key={index} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 
            last:pr-24'
            onClick={() => router.push(`/?genre=${item}`)}
            >{item}</h2>        
          })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}

