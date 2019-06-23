import LocalizedStrings from 'react-native-localization';

const strings: any = new LocalizedStrings({
  en: {
    SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
    SIGN_IN_WITH_FACEBOOK: 'Sign in with Facebook',
    INTRO_TITLE_1: '정기결제',
    INTRO_TITLE_2: '구독',
    INTRO_TITLE_3: '자동이체',
    INTRO_TITLE_4: '월 정액',
    INTRO_TITLE_5: '정기배송',
    INTRO_MESSAGE: '잊지말고\n똑똑하게',
    INTRO_WHATSSUB: '',
    NAVIGATE: 'Navigate',
    CHANGE_THEME: 'Change theme',
  },
  ko: {
    SIGN_IN_WITH_GOOGLE: '구글 계정으로 시작하기',
    SIGN_IN_WITH_FACEBOOK: '페이스북 계정으로 시작하기',
    INTRO_TITLE_1: '정기결제',
    INTRO_TITLE_2: '구독',
    INTRO_TITLE_3: '자동이체',
    INTRO_TITLE_4: '월 정액',
    INTRO_TITLE_5: '정기배송',
    INTRO_MESSAGE: '잊지말고\n똑똑하게',
    INTRO_WHATSSUB: '',
    NAVIGATE: '이동하기',
    CHANGE_THEME: '테마 변경',
  },
});

export const getString = (str: string) => {
  return strings[str];
};
