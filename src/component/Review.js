import React from 'react'
import { useState } from 'react';
import { review } from '../data/review';
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
    <div style={{transition:'ease-in 0.5s'}}>
      <img
        src={image}
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={prevbutton}> {buttonlogo} </button>
      <button onClick={nextbutton}> {buttonlogo2} </button>
    </div>
  );
}

export default Review