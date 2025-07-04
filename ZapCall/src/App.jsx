
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Logo from './components/Logo';
import FlashcardList from './components/FlashcardList';
import Footer from './components/Footer';
import flashcardsData from './data/flashcardsData';

function App() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const totalFlashcards = flashcardsData.length;


  function incrementAnsweredCount() {
    setAnsweredCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo />
        <FlashcardList onFlashcardAnswered={incrementAnsweredCount} />
        <Footer answeredCount={answeredCount} totalCount={totalFlashcards} />
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* O flex-grow no AppContainer não é estritamente necessário aqui,
     já que o footer é fixo. Mas pode ser útil se o layout se tornar mais complexo. */
`;