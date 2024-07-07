import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';
import axios from "axios";
import { useState,useEffect } from 'react';

const Freebook = () => 
{
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
    const filterdata= book.filter((data) => data.category === 'Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    console.log(filterdata);
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-5'>
        <h1 className='font-semibold text-xl pb-4'>Free Offered Courses</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore non nemo, temporibus odio sunt eos explicabo accusamus hic eligendi exercitationem deserunt at odit nostrum rem saepe! Vero, similique libero!</p>


        <Slider {...settings}>
            {filterdata.map((item) => (
                <Cards item={item} key = {item.id}/>
            ))}
        </Slider>


    </div>
  )
}

export default Freebook 