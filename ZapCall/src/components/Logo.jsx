import styled from 'styled-components';
import logoImage from '../assets/logo.png';

export default function Logo() {
  return (
    <LogoContainer>
      <img src={logoImage} alt="Zap Recall Logo" />
      <h1>Zap Recall</h1>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: white;
  gap: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;