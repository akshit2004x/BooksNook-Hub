import React from 'react'


const Cards = ({item}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl mt-5 mb-5 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:bg-pink-600 hover:text-white">{item.category}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
