import React from 'react';

const PopularCard = ({item}) => {
    // console.log(Object.keys(item).join(","))
    const {id,name,rating,price,image}=item;
    return (
        <div className="card bg-base-100 shadow-xl ">
  <figure className="px-8 pt-10  h-[350px] ">
    <img src={image} alt="Shoes" className="rounded-xl bg-gray-200" />
  </figure>
  <div className="card-body items-center text-center">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title font-bold">{name}</h2>
     <p className='text-[#FF3811] font-bold text-xl'> ${price}</p>
    
  </div>
</div>
    );
};

export default PopularCard;