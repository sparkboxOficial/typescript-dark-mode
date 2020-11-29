import styled from 'styled-components';

interface ICard {
  dark: boolean;
}

export const HomeContainer = styled.div`
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const HomeWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 24px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

export const HomeInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
`

export const HomeInfoText = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 610px; 
`

export const TextH1 = styled.h1`
  width: 100%;
  align-items: flex-start;
  font-size: 72px;
  font-weight: 800;
  line-height: 126px;
`;

export const TextH2 = styled.h2`
  width: 100%;
  align-items: flex-start;
  font-size: 30px;
  line-height: 38px;
  font-weight: 400;
  color: #EF9C9C;
  margin-top: -20px;
`

export const TextP = styled.p`
  margin-top: 50px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: justify;
  color: #D8D8D8;
`

export const HomeCards = styled.div`
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
`

export const HomeCard = styled.div<ICard>`
  border-radius:30px;
  background: ${({dark}) => dark ? '#2B3544': '#ffffff'};
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`

export const HomeCardHeader = styled.h1`
  font-weight: 800;
  font-size: 30px;
  line-height: 51px;
`

export const HomeCardImage = styled.img`
  width: 100%;
`

export const HomeWatchImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WatchImage = styled.img`
  height: 100%;
  width: 100%;
`
