import { useState } from 'react';
import FlashcardUI from './FlashcardUI';

export default function Flashcard({ id, question, answer, onFlashcardAnswered }) {
  const [isFlipped, setIsFlipped] = useState('initial');
  const [status, setStatus] = useState('pending');

  const isAnswered = status !== 'pending';

  function handlePlayClick() {
    if (!isAnswered) {
      setIsFlipped('question');
    }
  }

  function handleTurnClick() {
    setIsFlipped('answer');
  }

  function handleAnswer(selectedStatus) {
    setStatus(selectedStatus);
    setIsFlipped('initial');
    onFlashcardAnswered();
  }

  return (
    <FlashcardUI
      id={id}
      question={question}
      answer={answer}
      isFlipped={isFlipped}
      isAnswered={isAnswered}
      status={status}
      onPlayClick={handlePlayClick}
      onTurnClick={handleTurnClick}
      onAnswer={handleAnswer}
    />
  );
}