import React from 'react';

import {HomeContainer, HomeWrapper, HomeInfo, HomeInfoText, TextH1, TextH2, TextP, HomeCards, HomeWatchImageWrapper, WatchImage, HomeCard, HomeCardHeader, HomeCardImage} from './HomePageElements';
import WatchPink from '../../assets/smartwatch_pink.svg'
import WatchWhite from '../../assets/smartwatch_white.svg'
import WatchDark from '../../assets/smartwatch_dark.svg'

interface IHomePage {
  dark: boolean;
}

const HomePage: React.FC<IHomePage> = ({ dark }) => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeInfo>
          <HomeInfoText>
            <TextH1>Smartwatch</TextH1>
            <TextH2>ELEMENT SERIE</TextH2>
            <TextP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.</TextP>
          </HomeInfoText>
          <HomeCards>
            <HomeCard dark={dark}>
              <HomeCardHeader>White</HomeCardHeader>
              <HomeCardImage src={WatchWhite} alt="White watch" />

            </HomeCard>
            <HomeCard dark={dark}>
              <HomeCardHeader>Dark</HomeCardHeader>
              <HomeCardImage src={WatchDark} alt="Dark watch" />
            </HomeCard>
          </HomeCards>
        </HomeInfo>
        <HomeWatchImageWrapper>
          <WatchImage src={WatchPink} alt="pink watch"/>
        </HomeWatchImageWrapper>
      </HomeWrapper>
    </HomeContainer>
  )
}

export default HomePage;