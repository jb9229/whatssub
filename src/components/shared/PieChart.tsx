import React, { Component } from 'react';
import {
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { ColorProperty } from 'csstype';
import { PieChart } from 'react-native-svg-charts';
import { colors } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';

export interface Product {
  name: string;
  category: string;
  price: number;
  currency: string;
  date: Date;
  image: string;
  currentMonthPaymentDate: Date;
};

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const StyledViewInfo = styled.View`
  background-color: transparent;
  flex-direction: column;
`;
const StyledText = styled.Text`
  font-size: 14;
  color: ${({ theme }) => theme.fontColor};
`;
const StyledTextMonth = styled.Text`
  font-size: 14;
  color: ${({ theme }) => theme.fontColor};
`;
const StyledTextInfoCategory = styled.Text`
  font-size: 14;
  color: 'rgb(62,126,255)';
`;
const StyledTextInfoValue = styled.Text`
  font-size: 14;
  color: ${colors.gray};
`;

interface Props {
  style?: ViewStyle;
  data: Product[];
  defaultShowSlice?: number;
  currentMonth: string;
}

const getCategoryPrice = (data: Product[]) => {
  const categoryPrice = {};
  data && data.forEach((item:Product) => {
    if (!categoryPrice[item.category]) categoryPrice[item.category] = 0;
    categoryPrice[item.category] = categoryPrice[item.category] + item.price;
  });
  return categoryPrice;
};
const initSelectedSlice = { key: '', value: 0 };

export default function SharedPieChart(props: Props) {
  const [selectedSlice, setSelectedSlice] = React.useState(initSelectedSlice);
  // Total Amount by Category
  const categoryPrice = React.useMemo(() => {
    return getCategoryPrice(props.data);
  }, [props.data]);
  // Total Amount
  const totalPrice = React.useMemo(() => {
    const total = props.data && props.data.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return total;
  }, [props.data]);
  const currency = React.useMemo(() => {
    return (props.data && props.data[0].currency) || '원';
  }, [props.data]);

  const pieData = categoryPrice && Object.keys(categoryPrice)
    .map((category, index) => {
      const color = (selectedSlice.key === category) ? 'rgb(62,126,255)'
        : index % 3 === 0 ? '#666666' : index % 3 === 1 ? '#999999' : '#cccccc';
      return {
        key: category,
        value: categoryPrice[category],
        svg: { fill: color },
        arc: {
          innerRadius: (selectedSlice.key === category ? '75%' : '80%'),
          outerRadius: (selectedSlice.key === category ? '100%' : '90%'),
          padAngle: (selectedSlice.key === category ? 0 : 0.02),
        },
        onPress: () => {
          setSelectedSlice({
            key: category,
            value: categoryPrice[category],
          });
        },
      };
    });

  React.useEffect(() => {
    if (props.defaultShowSlice >= 0) {
      const num = props.defaultShowSlice > (pieData.length - 1)
        ? 0
        : props.defaultShowSlice;
      (pieData.length > 0) && setSelectedSlice({
        key: pieData[num].key,
        value: pieData[num].value,
      });
    }
  }, [props.data]);
  if (pieData && pieData.length > 0) {
    return (
      <Container style={props.style}>
        {/** Data View for Selected Slice */}
        <StyledViewInfo style={{
          position: 'absolute',
          left: '75%',
          top: 0,
          width: 100,
          height: 50,
        }}>
          <StyledTextInfoCategory>
            {`${selectedSlice.key}`}
          </StyledTextInfoCategory>
          <StyledTextInfoValue>
            {`${selectedSlice.value}${currency}`}
          </StyledTextInfoValue>
        </StyledViewInfo>
        {/** Donut chart */}
        <PieChart
          style={{ width: 214, height: 214 }}
          data={pieData}
          // outerRadius={'100%'}
          // innerRadius={'90%'}
          // valueAccessor={({ item }) => item.amount}
        >
          {/* <Labels slices={null} height={null} width={null}/> */}
        </PieChart>
        {/** centered elements : month, total amount to be paid,  */}
        <View style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center' }}
        >
          <StyledTextMonth style={{}}>
            {`${props.currentMonth || '2016.00'}`}
          </StyledTextMonth>
          <StyledText style={{ fontSize: 14, color: colors.gray }}>
            {getString('AMOUNT_TO_BE_PAID')}
          </StyledText>
          <StyledText style={{ fontSize: 24, color: colors.gray }}>
            {`${totalPrice}${currency}`}
          </StyledText>
          {/* <StyledText style={{ fontSize: 20 }}>
          {`${selectedSlice.key} \n ${selectedSlice.value}`}</StyledText> */}
        </View>
      </Container>
    );
  } else {
    return null;
  }
}
