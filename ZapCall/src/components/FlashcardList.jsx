import styled from 'styled-components';
import Flashcard from './Flashcard';
import flashcardsData from '../data/flashcardsData';

export default function FlashcardList({ onFlashcardAnswered }) {
  return (
    <ListContainer>
      {flashcardsData.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          id={flashcard.id}
          question={flashcard.question}
          answer={flashcard.answer}
          onFlashcardAnswered={onFlashcardAnswered}
        />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0;
  margin-bottom: 120px; /* Importante para dar espaço ao footer fixo */
`;