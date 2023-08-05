import React from "react";
import "./Coin.css";

const Coin = ({ image, name, price, volume, pricechange, marketcap }) => {
  // Helper function to format the number with commas using toLocaleString
  const formatNumberWithCommas = (number) => {
    if (typeof number === "number") {
      return number.toLocaleString();
    }
    return "N/A";
  };

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{formatNumberWithCommas(price)}</p>
          <p className="coin-volume">Rs.{formatNumberWithCommas(volume)}</p>
          {pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}
          {marketcap ? (
            <p className="coin-marketcap">
              Mkt Cap: Rs.{formatNumberWithCommas(marketcap)}
            </p>
          ) : (
            <p className="coin-marketcap">Mkt Cap: N/A</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
