import styled from 'styled-components';

export default function Footer({ answeredCount, totalCount }) {
  return (
    <FooterContainer data-test="footer">
      <h3>{answeredCount}/{totalCount} Concluídos</h3>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 70px; /* Use min-height para se adaptar ao conteúdo */
  background-color: #FFFFFF; /* Fundo branco, como no Figma */
  display: flex;
  flex-direction: column; /* Para alinhar o texto e, futuramente, os ícones */
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333333;
  position: fixed; /* Fixa o footer na parte inferior da tela */
  bottom: 0; /* Alinha na parte inferior */
  left: 0; /* Alinha à esquerda */
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05); /* Sombra superior */
  padding: 10px 0; /* Adiciona padding vertical para o conteúdo */

  h3 {
    margin: 0; /* Remove margem padrão do h3 */
  }
`;