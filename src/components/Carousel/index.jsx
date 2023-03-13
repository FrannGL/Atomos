import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function Example(props) {
  const items = [
    {
      id: 1,
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "../../../public/assets/images/bariloche 1.jpg",
    },
    {
      id: 2,
      name: "Random Name #2",
      description: "Hello World!",
      image: "../../../public/assets/images/bariloche 2.jpg",
    },
    {
      id: 3,
      name: "Random Name #2",
      description: "Hello World!",
      image: "../../../public/assets/images/bariloche 3.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
