import React, { useContext } from "react";
import { imgContext } from "../imgProvider";
import Heart from "../components/Heart";

const Home = () => {
  const { data, setData } = useContext(imgContext);
  const blod = (idImg) => {
    setData((current) =>
      current.map((obj) => {
        if (obj.id === idImg && obj.favorite === false) {
          return { ...obj, favorite: true };
        }
        if (obj.id === idImg && obj.favorite === true) {
          return { ...obj, favorite: false };
        }
        return obj;
      })
    );
  };
  return (
    <div>
    <div className="title">
    <h2>Natural Pic</h2>
    </div>
    <div className="container-img">
      {data.map((item) => (
        <div
          className="card-container"
          key={item.id}
          style={{
            backgroundImage: `url(${item.src.tiny})`,
          }}
        >
          <div className="info-img">
            <p>{item.alt}</p>
            </div>
          <div className="heart" onClick={() => blod(item.id)}>
            <Heart filled={item.favorite} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default Home;
