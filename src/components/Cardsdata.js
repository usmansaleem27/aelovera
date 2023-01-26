import React from 'react'
import Flower from "../images/flower_bg.png"

const Cardsdata = (props) => {
  return (
    <div>
      <div className="card mx-3 my-3">
                <div className="text-center">
                  <img src={ props.img } className="img-fluid card_img " alt="..." />
                  </div>
                  <div className="card-body">
                    <h3 className="text-center fw-bold"> {props.heading} </h3>
                  <p className="text-center"> {props.descriptiontag}  </p>
                  <p className="card-text text-center">
                      { props.cardsdescription }
                    </p>
                    <a href="#" className="btn btn-danger">
                      { props.button }
                    </a>
                  </div>
              </div>
    </div>
  )
}

export default Cardsdata
