import React, {useEffect, useState} from "react";
import styles from './index.module.css';
import cx from 'classnames';

type Props = {title: string};

const TitleAnimation = ({title}: Props) => {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setShow(false);
      setTimeout(() => {
        setText(title);
        setShow(true);
      }, 1000);

    } else {
      setShow(true);
      setText(title);
    }

    // eslint-disable-next-line
  }, [title]);

  return <h1 className={cx(styles.question, {[styles.hide]: !show})}>{text}</h1>;
};

export default TitleAnimation;
