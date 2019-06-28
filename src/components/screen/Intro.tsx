import React from 'react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  View,
} from 'react-native';
import { Text } from 'react-native-animatable';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import { AppProvider as Provider, AppConsumer, AppContext } from '../../providers';

import styled from 'styled-components/native';

import { ThemeType } from '../../theme';
import { IC_LOGO, IC_GOOGLE, IC_FACEBOOK, IC_SLASH } from '../../utils/Icons';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';
import useInterval from '../../hooks/useInterval';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }) => theme.backgroundDark};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const TitleWrapper = styled.View`
  margin-top: 120;
  align-self: center;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoImage = styled.Image`
  width: 135;
  height: 30;
`;

const SlashImage = styled.Image`
  width: 14;
  height: 14;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const ContentScroll = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

const StyledAnimatableText = styled(Text)`
  font-size: 36;
  font-weight: 600;
  min-height: 44;
  line-height: 48;
  color: white;
`;

const StyledText = styled.Text`
  font-size: 36;
  font-weight: 600;
  line-height: 48;
  text-align: center;
  color: ${({ theme }) => theme.fontLight};
`;

const ButtonWrapper = styled.View`
  bottom: 40;
  width: 100%;
  height: 200;
  background-color: white;
  margin-top: 28;
  padding-top: 28;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface IProps {
  store?: any;
  screenProps?: any;
  navigation?: NavigationScreenProp<NavigationStateRoute<any>>;
}

function Intro(props: IProps) {
  const titleArray = [
    getString('INTRO_TITLE_1'),
    getString('INTRO_TITLE_2'),
    getString('INTRO_TITLE_3'),
    getString('INTRO_TITLE_4'),
    getString('INTRO_TITLE_5'),
  ];
  const [titleIndex, setTitleIndex] = React.useState(0);
  // const [user, initialising, error] = useAuthState(firebase.auth());

  // const changeTheme = () => {
  //   let payload: object;
  //   if (state.theme === ThemeType.LIGHT) {
  //     payload = {
  //       theme: ThemeType.DARK,
  //     };
  //   } else {
  //     payload = {
  //       theme: ThemeType.LIGHT,
  //     };
  //   }
  //   dispatch({
  //     type: 'change-theme-mode',
  //     payload,
  //   });
  // };

  const googleLogin = () => {
    console.log('googleLogin');
  };

  const facebookLogin = () => {
    console.log('facebookLogin');
  };

  const btnStyle = {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: props.screenProps.theme.btnWhiteBorder,
  };

  useInterval(() => {
    if (titleIndex === 4) {
      setTitleIndex(0);
    } else {
      setTitleIndex(titleIndex + 1);
    }
  }, 1000);

  return (
    <Container>
      <ContentWrapper>
        <ContentScroll
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TitleWrapper>
            <LogoImage source={IC_LOGO}/>
          </TitleWrapper>
          <SlashImage
            style={{
              marginTop: 68,
              marginBottom: 34,
            }}
            source={IC_SLASH}
          />
          <StyledAnimatableText
            animation='fadeIn'
            iterationCount='infinite'
            direction='alternate'
            duration={1000}
          >
            { titleArray[titleIndex] }
          </StyledAnimatableText>
          <StyledText>{getString('INTRO_MESSAGE')}</StyledText>
          <StyledText style={{
            color: props.screenProps.theme.fontTint,
          }}>{getString('INTRO_WHATSSUB')}</StyledText>
          <SlashImage
            style={{
              marginTop: 38,
              marginBottom: 68,
            }}
            source={IC_SLASH}
          />
          <ButtonWrapper>
            <Button
              testID='btnGoogle'
              style={btnStyle}
              imgLeftSrc={IC_GOOGLE}
              onClick={ () => googleLogin() }
              text={getString('SIGN_IN_WITH_GOOGLE')}
            />
            <View style={{ marginTop: 8 }}/>
            <Button
              testID='btnFacebook'
              style={btnStyle}
              imgLeftSrc={IC_FACEBOOK}
              imgLeftStyle={{
                height: 28,
                width: 16,
              }}
              onClick={ () => facebookLogin() }
              text={getString('SIGN_IN_WITH_FACEBOOK')}
            />

          </ButtonWrapper>
        </ContentScroll>
      </ContentWrapper>
    </Container>
  );
}

export default Intro;
