import React, { useState } from "react";
import ReactDOM from "react-dom";
import CreditCardCheckout from "../CreditCardCheckout.jsx";

import "./styles.scss";

function App() {
  const [name, setName] = useState("Riandy Dimas");
  const [number, setNumber] = useState("371209512822287");
  const [date, setDate] = useState({ month: "02", year: "22" });
  const [cvv, setCvv] = useState("022");
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <CreditCardCheckout
          name={name}
          number={number}
          date={date}
          cvv={cvv}
          flipped={flipped}
          onCvvFocus={() => setFlipped(true)}
          onCvvBlur={() => setFlipped(false)}
          onChange={(value, field) => {
            switch (field) {
              case "name":
                setName(value);
                break;
              case "number":
                setNumber(value);
                break;
              case "date":
                setDate(value);
                break;
              case "cvv":
                setCvv(value);
                break;
              default:
                break;
            }
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
