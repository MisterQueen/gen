import React from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";

import Button from '../../components/Button';

import hand from '../../assets/hand.svg';

const StartTemplate = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bgFigure}/>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <img src={hand} alt="hand" className={styles.img} />
        </div>

        <div className={styles.textBlock}>
          <h1 className={styles.title}>Who wants to be a millionaire?</h1>

          <div className={styles.buttonWrapper}>
            <Link to="/play">
              <Button onClick={() => { }}>Start</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartTemplate