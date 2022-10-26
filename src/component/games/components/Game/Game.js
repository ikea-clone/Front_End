import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "신라면",
    src: require("../../img/shin.png")
  },
  {
    name: "불닭볶음면",
    src: require("../../img/bul.jpg")
  },
  {
    name: "참깨라면",
    src: require("../../img/Cham.png")
  },
  {
    name: "진라면",
    src: require("../../img/jin.jpg")
  },
  {
    name: "육개장 사발면",
    src: require("../../img/6.jpg")
  },
  {
    name: "까르보 불닭볶음면",
    src: require("../../img/KKA.jpg")
  },
  {
    name: "딜러",
    src: require("../../img/dealer.jpg")
  },
  {
    name: "양념치킨 사발면",
    src: require("../../img/yang.jpg")
  }
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">2021 라면 월드컵일까? </h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
