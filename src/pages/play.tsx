import React from 'react';
import PlayTemplate from "../templates/PlayTemplate";
import questions from '../questions.json';

const PlayPage = () => {
  return (
    <PlayTemplate questions={questions}/>
  )
}

export default PlayPage