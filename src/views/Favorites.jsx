import React, { useContext } from "react";
import { imgContext } from "../imgProvider";

const Favorites = () => {
  const { data } = useContext(imgContext);
  return (
    <div>
    <div className="title">
    <h2>Fotos Favoritas</h2>
    </div>
    <div className="container-img">
      {data
        .filter((z) => z.favorite === true)
        .map((item) => (
          <img key={item.id} src={item.src.tiny} alt="" />
        ))}
    </div>
    </div>
  );
};

export default Favorites;