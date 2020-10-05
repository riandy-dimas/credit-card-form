import React, { PureComponent } from "react";
import "./styles.scss";
import utils from "../utils";

import Input from "../input";

class Form extends PureComponent {
  handleChange(field, e) {
    const { onChange } = this.props;
    let { value } = e.target;
    if (field === "date") {
      value = value.replace("/", "");
      let v = {
        month: "00",
        year: "00"
      };
      if (!isNaN(value)) {
        if (value.length === 1) {
          v.month = Number(value.charAt(0)) > 1 ? `0${value}` : value;
          v.year = "";
        } else if (value.length === 2) {
          v.month = Number(value.charAt(1)) > 2 ? value.charAt(0) : value;
          v.year = "";
        } else if (value.length === 3) {
          v.month = value.substring(0, 2);
          v.year = value.charAt(2);
        } else {
          v.month = value.substring(0, 2);
          v.year = value.substring(2, 4);
        }
        value = v;
        onChange(value, field);
      }
    } else if (field === "cvv") {
      if (!isNaN(value)) {
        value = value.length > 3 ? value.substring(0, 3) : value;
        onChange(value, field);
      }
    } else if (field === "number") {
      value = value.replace(/ /g, "");
      if (!isNaN(value)) {
        value = value.length > 16 ? value.substring(0, 16) : value;
        onChange(value, field);
      }
    } else {
      onChange(value, field);
    }
  }
  render() {
    const { name, number, date, cvv, onCvvFocus, onCvvBlur } = this.props;
    return (
      <div className="form">
        <Input
          type="text"
          onChange={this.handleChange.bind(this, "name")}
          label="Cardholder Name"
          bold
          value={name}
          placeholder="Your Name"
          className="form--input form--input-full1"
        />
        <Input
          type="text"
          onChange={this.handleChange.bind(this, "number")}
          label="Card Number"
          mono
          value={utils.transformNumber(number)}
          placeholder="xxxx xxxx xxxx xxxx"
          className="form--input form--input-full2"
          error={
            utils.validateCardNumber(number)
              ? null
              : utils.convertUnicode("\u2716")
          }
        />
        <Input
          type="text"
          onChange={this.handleChange.bind(this, "date")}
          label="Expiration Date"
          value={utils.transformDate(date)}
          placeholder="mm / yy"
          className="form--input form--input-half1"
        />
        <Input
          type="password"
          onChange={this.handleChange.bind(this, "cvv")}
          onFocus={onCvvFocus.bind(this)}
          onBlur={onCvvBlur.bind(this)}
          label="CVV / CVC"
          value={cvv}
          placeholder="xxx"
          className="form--input form--input-half2"
        />
      </div>
    );
  }
}

Form.defaultProps = {
  onChange: (value, field) => {},
  onCvvBlur: () => {},
  onCvvFocus: () => {}
};

export default Form;
