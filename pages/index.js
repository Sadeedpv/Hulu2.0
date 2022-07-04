import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import axios from 'axios';

export default function Home({genre}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="Hulu clone or Hulu 2.0 made with Nextjs Tailwindcss" />
        <meta name="keywords" content="Nextjs, Tailwindcss, hulu2.0, api" />
        <meta name="author" content="Sadeed pv" />
      </Head>
      {/* Header */}

      <Header />

      {/* Navbar */}

      <Navbar genre={genre}/>

      {/* Movies */}

      <Results />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '2010',
      end_year: '2020',
      genre: genre,
      language: 'english',
      sort: 'latest',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  const result = await axios.request(options).then(function (response) {
    return response.data
  });

  const options2 = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/getParams',
    params: {param: 'genre'},
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  const genres = await axios.request(options2).then(res =>{
    return res.data
  });


  return{
    props:{
      results:result,
      genre:genres
    }
  }

}

