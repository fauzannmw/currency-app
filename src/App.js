import React, { useState, useEffect } from "react";
import "./App.scss";
import { Container, Row } from "react-bootstrap";

function App() {
  const [currencyData, setCurrency] = useState({});
  useEffect(() => {
    fetch(
      "http://data.fixer.io/api/latest?access_key=69d8a8a941e00f40e4ef291063c57c47&format=1&symbols=CAD,IDR,JPY,CHF,EUR,USD"
      // data dalam bentuk object
    )
      .then((res) => res.json())
      .then((data) => setCurrency(data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <div className="currency-title">
          <h1 className="currency-price">We Buy</h1>
          <h1 className="currency-rate">Exchange Rate</h1>
          <h1 className="currency-price">We Sell</h1>
        </div>
      </Row>
      <hr />
      {currencyData.rates &&
        Object.keys(currencyData.rates).map((rateKey) => (
          <Row key={rateKey}>
            <div className="currency-data">
              <h1 className="currency-price">{rateKey}</h1>
              <h1 className="currency-price">
                {currencyData.rates[rateKey] * 1.04}
              </h1>
              <h1 className="currency-price">{currencyData.rates[rateKey]} </h1>
              <h1 className="currency-price">
                {currencyData.rates[rateKey] * 0.96}
              </h1>
            </div>
          </Row>
        ))}
    </Container>
  );
}

export default App;
