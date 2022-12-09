import React, {useState} from "react";
import styles from './index.module.css'
import cx from "classnames";
import Step from "../Step";

import cross from '../../assets/cross.svg';
import menu from '../../assets/menu.svg';

export interface ButtonProps {
  items: number[];
  activeIndex: number;
}

const Sidebar: React.FC<ButtonProps> = ({
                                        items,
                                        activeIndex,
                                       }) => {
  const [isShowed, setIsShowed] = useState(false);
  const sidebarClassNames = cx(styles.sidebar, {
    [styles.show]: isShowed
  })
  return (
    <>
      <img src={menu} alt="menu" className={styles.menu} onClick={() => setIsShowed(true)} />
      <div className={sidebarClassNames}>
        <div className={styles.container}>
          {items.map((item, i) => (
            <Step isDisabled={activeIndex > i} isActive={activeIndex === i} amount={item} key={i}/>
          ))}
        </div>
        <img src={cross} alt="close" className={styles.close} onClick={() => setIsShowed(false)} />
      </div>
    </>
  );
};

export default Sidebar;
