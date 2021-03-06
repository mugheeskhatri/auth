import React from 'react'
import img from '../assets/img.jpeg'
function Card(props) {
    return (
        <div className="p-2 col-md-3 shadow Card my-4">
        <img className="card_img height" src={props.imgSrc} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.paragraph}</p>
          <p className="card-text">{props.paragraph}</p>
          <a href="#" className="btn btn-primary w-100">Add to Cart</a>
        </div>
      </div>
    )
}

export default Card
