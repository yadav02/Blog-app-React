import React from 'react';

const travelImgCard = (props) => {
    return(
       
        <div className="TrvlCard">
            <img src = {props.thumbnail} alt="Card Thumbnail"></img>
             <h3>{props.title}</h3>
        </div>
    )
}
export default travelImgCard;