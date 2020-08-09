import React from "react";
import Proptypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.5,
  },
  {
    id: 3,
    name: "sushi",
    image: "https://i.ytimg.com/vi/xLV1ZHEAaS0/maxresdefault.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "chiken",
    image: "https://i.ytimg.com/vi/zYkA5W_YeTY/maxresdefault.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "bagle",
    image:
      "https://uvmbored.com/wp-content/uploads/2016/04/Purchase_Coffee_and_Bagel.jpg",
    rating: 4.2,
  },
  {
    id: 6,
    name: "maratang",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/ZRznFtvHMlJSoIfMaxYkcw/o.jpg",
    rating: 3.7,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name} </h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
