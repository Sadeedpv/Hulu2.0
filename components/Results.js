import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({results}) => {
  console.log(results)
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results && results.results.map((item, index) => {
        return <Thumbnail key={index} item={item} />
      })}
    </div>
  )
}

export default Results