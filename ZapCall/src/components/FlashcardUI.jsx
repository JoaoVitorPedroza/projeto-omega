import styled from 'styled-components';
import playIcon from '../assets/seta_play.png';
import turnIcon from '../assets/seta_virar.png';
import errorIcon from '../assets/icone_erro.png';
import almostIcon from '../assets/icone_quase.png';
import zapIcon from '../assets/icone_certo.png';

export default function FlashcardUI({ id, question, answer, status, isFlipped, isAnswered, onPlayClick, onTurnClick, onAnswer }) {
  if (isAnswered) {
    const statusColor = status === 'zap' ? '#2FBE34' : status === 'almost' ? '#FF922E' : '#FF3030';
    const statusIcon = status === 'zap' ? zapIcon : status === 'almost' ? almostIcon : errorIcon;
    const statusAlt = status === 'zap' ? 'Ícone de acerto' : status === 'almost' ? 'Ícone de quase acerto' : 'Ícone de erro';

    return (
      <CardContainer statusColor={statusColor} isAnswered={true} data-test="flashcard">
        <p data-test="flashcard-text">Pergunta {id}</p>
        <img src={statusIcon} alt={statusAlt} data-test={`${status}-icon`} />
      </CardContainer>
    );
  } else if (isFlipped === 'question') {
    return (
      <CardOpen isAnswerScreen={false} data-test="flashcard">
        <p data-test="flashcard-question">{question}</p>
        <img src={turnIcon} alt="Virar cartão" onClick={onTurnClick} data-test="turn-btn" />
      </CardOpen>
    );
  } else if (isFlipped === 'answer') {

    return (
      <CardOpen isAnswerScreen={true} data-test="flashcard">
        <p data-test="flashcard-answer">{answer}</p>
        <ButtonsContainer>
          <Button color="#FF3030" data-test="no-btn" onClick={() => onAnswer('no')}>Não lembrei</Button>
          <Button color="#FF922E" data-test="partial-btn" onClick={() => onAnswer('almost')}>Quase não lembrei</Button>
          <Button color="#2FBE34" data-test="zap-btn" onClick={() => onAnswer('zap')}>Zap!</Button>
        </ButtonsContainer>
      </CardOpen>
    );
  } else {

    return (
      <CardContainer data-test="flashcard">
        <p data-test="flashcard-text">Pergunta {id}</p>
        <button onClick={onPlayClick} data-test="play-btn">
          <img src={playIcon} alt="Abrir pergunta" />
        </button>
      </CardContainer>
    );
  }
}

const CardContainer = styled.li`
  background-color: #FFFFFF;
  width: 90%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 25px;

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.isAnswered ? props.statusColor : '#333333'};
    text-decoration: ${props => props.isAnswered ? 'line-through' : 'none'};
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Adicionado para desabilitar o clique após respondido */
    pointer-events: ${props => props.isAnswered ? 'none' : 'auto'};
  }
  button img {
    width: 25px;
    height: 25px;
  }
`;

const CardOpen = styled.div`
    width: 90%;
    min-height: 131px;
    background: ${props => props.isAnswerScreen ? '#FFFFFF' : '#FFFFD4'}; /* Fundo dinâmico */
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 15px 10px 15px;
    font-size: 18px;
    color: #333333;
    position: relative;
    margin-bottom: 25px;

    p {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        margin-bottom: 10px;
    }

    img {
        position: absolute;
        bottom: 6px;
        right: 15px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* Regra para ocultar a imagem se for a tela de resposta */
    ${props => props.isAnswerScreen && `
        img {
            display: none;
        }
    `}
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
`;

const Button = styled.button`
    width: 30%;
    height: 38px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
`;