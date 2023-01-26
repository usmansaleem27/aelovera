import React from "react";
import Flower from "../images/flower_bg.png"
import Cardsdata from "./Cardsdata";

const Cards = () => {
  return (
    <div className="pt-lg-5 pt-3 mt-lg-5 pb-lg-5 pb-3">
      <div className="container g-0">
        <div className="row g-0">
        
            <div className="col-lg-4 col-md-4 col-12">
                <Cardsdata heading="Herbal Medicine" descriptiontag="Pure Aelovera" cardsdescription="Some quick example text to build on the card title and
                      make up the bulk of the card's content." button="Herbal Medicine" img={ Flower } />
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <Cardsdata heading="Fresh Product" descriptiontag="Pure Aelovera" cardsdescription="Some quick example text to build on the card title and
                      make up the bulk of the card's content." button="Fresh product" img={ Flower }/>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <Cardsdata heading="Total Care" descriptiontag="Pure Aelovera" cardsdescription="Some quick example text to build on the card title and
                      make up the bulk of the card's content." button="Total Care" img={ Flower }/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;
