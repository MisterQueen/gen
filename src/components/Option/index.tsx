import React from "react";
import styles from './index.module.css'
import cx from "classnames";

export interface ButtonProps {
  onClick: () => void;
  isPreloader?: boolean;
  className?: string;
  isCorrect?: boolean;
  children: any;
}

const Option: React.FC<ButtonProps> = ({
                                         className,
                                         onClick,
                                         isPreloader,
  isCorrect,
                                         ...props
                                       }) => {
const buttonClassNames = cx(styles.root, {
  [styles.incorrect]: typeof isCorrect !== "undefined" && !isCorrect,
  [styles.correct]: isCorrect
})
  return (
    <div className={buttonClassNames}>
      <button
        type="button"
        onClick={onClick}
        className={cx(styles.button, className)}
      >
        <div className={styles.bg}/>
        <div className={styles.content}>{props.children}</div>
      </button>
      <div className={styles.hr}/>
    </div>
  );
};

export default Option;
