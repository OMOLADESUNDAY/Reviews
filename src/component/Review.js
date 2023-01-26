import React from 'react'
import { useState } from 'react';
import { review } from '../data/review';
import './review.css'
const buttonlogo='<'
const buttonlogo2 = ">";
const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, image, description } = review[index];
    const checkNumber=(number)=>{
      if(number>review.length-1){
        return 0
      }
      if(number<0){
        return review.length-1
      }
      return number
    }
    const prevbutton=()=>{
        setIndex((index)=>{
          let newIndex = index - 1;
          return checkNumber(newIndex);
        })
    }
    const nextbutton = () => {
        setIndex((index) =>{
            let newIndex=index + 1;
            return checkNumber(newIndex)
        } );
    };
    return (
      <div className="review_container">
        <div className="image_container">
          <img className="image" src={image} alt={name} />
        </div>

        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <div className="btn_container">
          <button className="prev_button" onClick={prevbutton}>
            {" "}
            {buttonlogo}{" "}
          </button>
          <button className="next_button" onClick={nextbutton}>
            {" "}
            {buttonlogo2}{" "}
          </button>
        </div>
      </div>
    );
}

export default Review