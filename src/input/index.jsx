import React, { PureComponent } from "react";
import "./styles.scss";

class Input extends PureComponent {
  constructor() {
    super();
    this.state = {
      isFocus: false
    };
  }
  handleFocus() {
    this.setState({
      isFocus: true
    });
    if (this.props.onFocus) this.props.onFocus();
  }
  handleBlur() {
    this.setState({
      isFocus: false
    });
    if (this.props.onBlur) this.props.onBlur();
  }
  render() {
    const {
      value,
      onChange,
      label,
      disabled,
      className,
      placeholder,
      type,
      mono,
      bold,
      error
    } = this.props;
    const { isFocus } = this.state;
    const inputClassName = `input${className ? ` ${className}` : ""}${
      mono ? " input-mono" : ""
    }${bold ? " input-bold" : ""}${disabled ? " input-disabled" : ""}${
      isFocus ? " input-focus" : ""
    }`;
    return (
      <div className={inputClassName}>
        {label && <div className="input--label">{label}</div>}
        <input
          type={type}
          className={`input--field`}
          value={value}
          onChange={onChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          disabled={disabled}
          placeholder={placeholder}
        />
        {error && <div className="input--error">{error}</div>}
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: () => {},
  type: "text"
};

export default Input;
