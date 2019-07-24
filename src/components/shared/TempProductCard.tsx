import React, { useState } from 'react';
import { View } from 'react-native';
import ProductCard, { Variant } from '../../components/shared/ProductCard';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundDark};
  padding-vertical: 100;
  padding-horizontal: 20;
`;

interface IProps {
  navigation: any;
}

function Page(props: IProps) {
  const [isNotificationEnable1, setNotificationEnable1] = useState(false);
  const [isSubscribing1, setSubscribing1] = useState(false);
  const [isNotificationEnable2, setNotificationEnable2] = useState(false);
  return (
    <Container>
      <View style={{ marginTop: 10 }}>
        <ProductCard
          onClickNotification={() => setNotificationEnable1((prev) => !prev)}
          onClickSubscription={() => setSubscribing1((prev) => !prev)}
          onClickEdit={() => console.log('clickEdit')}
          isNotificationEnable={isNotificationEnable1}
          isSubscribing={isSubscribing1}
          name='netflix'
          image='https://dummyimage.com/75x20/000/fff'
          price={65000}
          currentMonthPaymentDate={new Date('2019-7-28')}
          variant={Variant.Subscription}
          defaultIsSummary={false}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <ProductCard
          onClickNotification={() => setNotificationEnable2((prev) => !prev)}
          onClickEdit={() => console.log('clickEdit')}
          isNotificationEnable={isNotificationEnable2}
          name='전세대출금'
          image='https://dummyimage.com/31x31/000/fff'
          price={65000}
          currentMonthPaymentDate={new Date('2019-7-28')}
          variant={Variant.Payment}
          defaultIsSummary={false}
        />
      </View>
    </Container>
  );
}

export default Page;