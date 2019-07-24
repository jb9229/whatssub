import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components/native';
import { getString } from '../../../STRINGS';
import { IC_ADD, IC_ADD_SERVICE } from '../../utils/Icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;

const StyledText = styled.Text`
  color: white;
  font-weight: bold;
`;

const StyledOuterEmptyBox = styled.View`
  width: 100%;
  background-color: white; 
  align-items: center;
`;

const StyledEmptyBox = styled.View`
  width: 90%;
  background-color: rgb(231,234,238);
  margin: 10px 0px;
`;
const StyledEmptySpace = styled.Text`
  background-color: white;
`;

interface Props {
  navigation: any;
}

function Page(props: Props) {
  return (
    <Container>
      <LinearGradient
        colors={['rgb(114,181,255)', 'rgb(62,126,255)']}
        style={{ width: '100%', height: '33%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <StyledText
            style={{ marginLeft: 180, marginTop: 50 }}
          >{getString('EMPTY_WELCOME')}</StyledText>
          <View style={{ width: 148, height: 130 }}>
            <TouchableOpacity testID='btn' onPress={() => {}}>
              <Image style={{ width: '100%', height: '100%' }} source={IC_ADD}/>
              <Image style={{
                position: 'absolute', width: 30, height: 30, right: 13, top: 20,
              }} source={IC_ADD_SERVICE}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <StyledText>{getString('EMPTY_COMMENT1')}</StyledText>
          <StyledText>{getString('EMPTY_COMMENT2')}</StyledText>
        </View>
      </LinearGradient>
      <StyledOuterEmptyBox>
        <StyledEmptyBox style={{ height: 180 }}>
          <View style= {{ marginTop: 20.3, marginLeft: 81.5, marginRight: 70 }}>
            <StyledEmptySpace></StyledEmptySpace>
          </View>
          <View style= {{
            marginTop: 20.3, marginLeft: 122.8, marginRight: 111.2,
          }}>
            <StyledEmptySpace></StyledEmptySpace>
          </View>
          <View style= {{
            marginTop: 20.3, marginLeft: 122.8, marginRight: 111.2,
          }}>
            <StyledEmptySpace></StyledEmptySpace>
          </View>
          <View style= {{
            marginTop: 20.3,
            marginLeft: 81.5,
            marginRight: 70,
          }}>
            <StyledEmptySpace></StyledEmptySpace>
          </View>
        </StyledEmptyBox>
        <StyledOuterEmptyBox>
          <StyledEmptyBox style={{ height: 60 }}>
            <View style= {{
              marginTop: 20.3,
              marginLeft: 81.5,
              marginRight: 70,
            }}>
              <StyledEmptySpace></StyledEmptySpace>
            </View>
          </StyledEmptyBox>
        </StyledOuterEmptyBox>
        <StyledOuterEmptyBox>
          <StyledEmptyBox style={{ height: 60 }}>
            <View style= {{
              marginTop: 20.3,
              marginLeft: 81.5,
              marginRight: 70,
            }}>
              <StyledEmptySpace></StyledEmptySpace>
            </View>
          </StyledEmptyBox>
        </StyledOuterEmptyBox>
        <StyledOuterEmptyBox>
          <StyledEmptyBox style={{ height: 60 }}>
          </StyledEmptyBox>
        </StyledOuterEmptyBox>
      </StyledOuterEmptyBox>
    </Container>
  );
}

export default Page;
