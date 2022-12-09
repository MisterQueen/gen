import React, {useEffect, useState, useRef} from 'react';
import styles from './index.module.css';
import {useNavigate} from "react-router-dom";

import Option from '../../components/Option';
import Sidebar from "../../components/Sidebar";
import TitleAnimation from "../../components/TitleAnimation";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

interface Props {
  questions: {
    question: string,
    prize: number,
    answer: string[],
    options: string[],
  }[]
}

const PlayTemplate = ({questions}: Props) => {
  const navigate = useNavigate();
  const prize = useRef<number>(0)
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const activeItem = questions[activeIndex];

  useEffect(() => {
    if(!selectedItem) return;

    setTimeout(() => {
      if(questions[activeIndex].answer.includes(selectedItem)) {
        prize.current = questions[activeIndex].prize;
        setSelectedItem(null);
        if (questions?.length === activeIndex + 1) navigate(`/over?${prize.current}`);
        else setActiveIndex(activeIndex + 1);

      } else {
        setSelectedItem(null)
        navigate(`/over?${prize.current}`)
      }
    }, 1000);
    // eslint-disable-next-line
  }, [selectedItem])

  const handleChose = (option: string) => {
    setSelectedItem(option)
  }

  useEffect(() => {
    const confirmationMessage = 'Are you sure you don\'t want to become a millionaire?';
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
    };
    if(activeIndex) window.addEventListener('beforeunload', beforeUnloadHandler);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [activeIndex])

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <TitleAnimation title={activeItem.question}/>

        <div className={styles.questions}>
          {activeItem.options.map((option, i) => {
            const isSelected = selectedItem === option;

            return (
              <Option
                onClick={() => handleChose(option)} key={activeIndex + i}
                {...(isSelected ? {isCorrect: activeItem.answer.includes(selectedItem)} : {})}
              >
                <div className={styles.questions__item}>
                  <span className={styles.char}>
                    {ALPHABET[i%ALPHABET.length]}
                  </span>
                  {option}
                </div>
              </Option>
            )
          })}
        </div>
      </div>
      <Sidebar items={questions.map(({prize}) => prize)} activeIndex={activeIndex} />
    </div>
  )
}

export default PlayTemplate