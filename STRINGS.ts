import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const en = {
  SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
  SIGN_IN_WITH_FACEBOOK: 'Sign in with Facebook',
  INTRO_TITLE_1: 'Regular payment',
  INTRO_TITLE_2: 'Subscription',
  INTRO_TITLE_3: 'Automatic transfer',
  INTRO_TITLE_4: 'Monthly fixed charge',
  INTRO_TITLE_5: 'Regular delivery',
  INTRO_MESSAGE: 'Do not forget\nBe smart',
  INTRO_WHATSSUB: 'Whats-Sub',
  NAVIGATE: 'Navigate',
  CHANGE_THEME: 'Change theme',
  PRODUCTION_CARD_SUBSCRIPTION_SWITCH_ON: 'UnSub',
  PRODUCTION_CARD_SUBSCRIPTION_SWITCH_OFF: 'Sub',
  AMOUNT_TO_BE_PAID: 'Amount to be paid',
  CATEGORY_CULTURE_LEISURE: 'Culture/Leisure',
  CATEGORY_EDUCATION: 'Education',
  CATEGORY_GAME: 'Game',
  EMPTY_WELCOME: 'WelCome',
  EMPTY_COMMENT1: 'Press + button',
  EMPTY_COMMENT2: 'Register the service in use',
};

const ko = {
  SIGN_IN_WITH_GOOGLE: '구글 계정으로 시작하기',
  SIGN_IN_WITH_FACEBOOK: '페이스북 계정으로 시작하기',
  INTRO_TITLE_1: '정기결제',
  INTRO_TITLE_2: '구독',
  INTRO_TITLE_3: '자동이체',
  INTRO_TITLE_4: '월 정액',
  INTRO_TITLE_5: '정기배송',
  INTRO_MESSAGE: '잊지말고\n똑똑하게',
  INTRO_WHATSSUB: '왓-썹',
  NAVIGATE: '이동하기',
  CHANGE_THEME: '테마 변경',
  PRODUCTION_CARD_SUBSCRIPTION_SWITCH_ON: '해지',
  PRODUCTION_CARD_SUBSCRIPTION_SWITCH_OFF: '구독',
  AMOUNT_TO_BE_PAID: '결제 예정 금액',
  CATEGORY_CULTURE_LEISURE: '문화/여가',
  CATEGORY_EDUCATION: '교육',
  CATEGORY_GAME: '게임',
  EMPTY_WELCOME: '반갑습니다',
  EMPTY_COMMENT1: '+ 버튼을 눌러',
  EMPTY_COMMENT2: '사용중인 서비스를 등록해 볼까요',
};

i18n.fallbacks = true;
i18n.translations = { en, ko };
i18n.locale = Localization.locale;

export const getString = (param: string, mapObj?: object) => {
  if (mapObj) {
    i18n.t(param, mapObj);
  }
  return i18n.t(param);
};
