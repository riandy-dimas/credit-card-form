import React, { PureComponent } from "react";
import utils from "../utils";
import "./styles.scss";
import world from "../../assets/world.jsx";

class Card extends PureComponent {
  render() {
    const { number, name, date, cvv, flipped } = this.props;
    const cardType = utils.getCardType(number);
    const cardClassName = `card card-${cardType}${
      flipped ? " card-flipped" : ""
    }`;
    const cardBackClassName = `card card--back card-${cardType}`;
    const dateString = utils.transformDate(date);
    const numberString = utils.transformNumber(number);
    const cvvString = utils.transformCvv(cvv);
    return (
      <div className="card--wrapper">
        <div className={cardClassName}>
          <div className="card--world">{world("rgba(0,0,0, 0.2)")}</div>
          <div className="card--logo" />
          <div className="card--number">{numberString}</div>
          <div className="card--name">
            <div className="card--label">Cardholder Name</div>
            <span>{name}</span>
          </div>
          <div className="card--date">
            <div className="card--label">Exp. Date</div>
            <span>{dateString}</span>
          </div>
        </div>
        <div className={cardBackClassName}>
          <div className="card--world">{world("rgba(0,0,0, 0.2)")}</div>
          <div className="card--stripe" />
          <div className="card--signature" />
          <div className="card--cvv">{cvvString}</div>
        </div>
      </div>
    );
  }
}

export default Card;
