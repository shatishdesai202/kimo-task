import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-lg" };
const variants = {
  FillTeal600: "bg-teal_600 text-white_A700",
  OutlineTeal600: "border border-solid border-teal_600 text-teal_600",
};
const sizes: any = { sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}: any) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillTeal600", "OutlineTeal600"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
