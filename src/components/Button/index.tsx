import React from "react";
import styles from './index.module.css'
import cx from "classnames";

export interface ButtonProps {
  onClick: () => void;
  isPreloader?: boolean;
  className?: string;
  children: any
}

const Button: React.FC<ButtonProps> = ({
                                         className,
                                         onClick,
                                         isPreloader,
                                         ...props
                                       }) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.root, className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
