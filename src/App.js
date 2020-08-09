import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I love {name} </h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
  },
  {
    name: "sushi",
    imgae: "https://i.ytimg.com/vi/xLV1ZHEAaS0/maxresdefault.jpg",
  },
  {
    name: "chiken",
    image: "https://i.ytimg.com/vi/zYkA5W_YeTY/maxresdefault.jpg",
  },
  {
    name: "bagle",
    image:
      "https://uvmbored.com/wp-content/uploads/2016/04/Purchase_Coffee_and_Bagel.jpg",
  },
  {
    name: "maratang",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/ZRznFtvHMlJSoIfMaxYkcw/o.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
