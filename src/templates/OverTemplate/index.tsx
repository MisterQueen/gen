import React from 'react';
import styles from './index.module.css';
import {Link, useLocation} from "react-router-dom";

import Button from '../../components/Button';

import hand from '../../assets/hand.svg';

const OverTemplate = () => {
  const amount = +useLocation().search.slice(1);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <img src={hand} alt="hand" className={styles.img} />
        </div>

        <div className={styles.textBlock}>
          <p className={styles.question}>Total score:</p>
          <h1 className={styles.title}>${amount.toLocaleString('en')} earned</h1>

          <div className={styles.buttonWrapper}>
            <Link to="/play">
              <Button onClick={() => { }}>Try again</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverTemplate