import React, { PureComponent } from "react";
import "./styles.scss";

import Form from "./form";
import Card from "./card";

class CreditCardCheckout extends PureComponent {
  render() {
    const {
      number,
      cvv,
      date,
      name,
      flipped,
      onChange,
      onCvvFocus,
      onCvvBlur
    } = this.props;
    return (
      <div className="card_check_out">
        <Form
          onChange={onChange}
          onCvvFocus={onCvvFocus}
          onCvvBlur={onCvvBlur}
          name={name}
          number={number}
          date={date}
          cvv={cvv}
        />
        <Card
          name={name}
          number={number}
          date={date}
          cvv={cvv}
          flipped={flipped}
        />
      </div>
    );
  }
}

export default CreditCardCheckout;
