import React from 'react'
import { useState } from 'react';
import { review } from '../data/review';
const buttonlogo='<'
const buttonlogo2 = ">";
const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, image, description } = review[index];
    const prevbutton=()=>{
        setIndex((index)=>{
            if (index < 0) {
                
            }
          let newIndex = index - 1;
          return newIndex;
        })
    }
    const nextbutton = () => {
        setIndex((index) =>{
            if (index > review.length) {
                    
            }
            let newIndex=index + 1;
            return newIndex
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