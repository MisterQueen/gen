import React from "react";
import styles from './index.module.css'
import cx from "classnames";

export interface ButtonProps {
  isActive: boolean;
  isDisabled: boolean;
  amount: number;
}

const Step: React.FC<ButtonProps> = ({
                                         isActive,
  isDisabled,
  amount,
                                       }) => {
const buttonClassNames = cx(styles.root, {
  [styles.active]: isActive,
  [styles.disabled]: isDisabled,
})
  return (
    <div className={buttonClassNames}>
      <div className={styles.step}>
        <div className={styles.bg}/>
        <div className={styles.content}>${amount.toLocaleString('en')}</div>
      </div>
      <div className={styles.hr}/>
    </div>
  );
};

export default Step;
