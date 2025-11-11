"use client";

import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled = false,
  type = "button",
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "gradient",
    "danger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
