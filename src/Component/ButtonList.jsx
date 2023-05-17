import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Movies", "Gaming", "Cricket", "News", "Special"];
  return (
    <div className="flex">
      {list.map((items) => (
        <Button name={items} />
      ))}
    </div>
  );
};

export default ButtonList;
