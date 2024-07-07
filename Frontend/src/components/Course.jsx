import React, { useEffect, useState } from 'react'

import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";

const Course = () => {
  const [book ,setBook] = useState([])
  useEffect(()=> {
    const getBook = async() => {
      try{
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      }
      catch(error)
      {
        console.log(error)
      }
    };

    getBook();
  },[])

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 '>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold'>We're delighted to have you 
          <span className='text-pink-500'>
            here! :)
          </span>
          </h1>

          <p className='mt-12 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi necessitatibus asperiores quidem neque nulla! Architecto explicabo reiciendis excepturi pariatur? Iusto quaerat a omnis, id deleniti reprehenderit. Doloribus, optio! Dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas commodi voluptates, sunt doloremque laborum ad illum odit eum, eos numquam quidem culpa veniam autem recusandae inventore quaerat itaque porro?
          </p>
          
          <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>Back</button></Link>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {book.map((item) => (
              <Cards key={item.id} item={item}/>
          ) ) }
      </div>
    </div>
  )
}

export default Course
