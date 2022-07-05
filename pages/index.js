import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import axios from 'axios';

export default function Home({result}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Hulu clone or Hulu 2.0 made with Nextjs Tailwindcss" />
        <meta name="keywords" content="Nextjs, Tailwindcss, hulu2.0, api" />
        <meta name="author" content="Sadeed pv" />
      </Head>
      {/* Header */}

      <Header />

      {/* Navbar */}

      <Navbar />

      {/* Movies */}

      <Results results={result}/>
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
      'X-RapidAPI-Key': process.env.NEXT_API_KEY,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  const result = await axios.request(options).then(function (response) {
    console.log(response.data)
    return response.data
  });




  return{
    props:{
      result,
    }
  }

}

