import React from "react";
import ReactStars from "react-rating-stars-component";
import ReactReadMoreReadLess from "react-read-more-read-less";

function ReviewCard({name,Location,Date,img,Star,para}) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  return (
    <div>
      <div className='flex justify-center items-start gap-x-6 w-[86%] mx-auto py-3'>
        <img src={img} alt="" srcset="" />
        <div>
          <p className='clientname'>{name}</p>
          <p className='clientcity'>{Location} {Date}</p>
          <ReactStars
            count={Star}
            onChange={ratingChanged}
            size={24}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
           <div className="readmore">
          <ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreStyle={{ color: '#605DEC', textDecoration: 'underline' }}
          >
            {para}
          </ReactReadMoreReadLess> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
