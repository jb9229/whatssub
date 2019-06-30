# whatssub
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-native-ts.svg?style=shield)](https://circleci.com/gh/dooboolab/whatssub)
[![codecov](https://codecov.io/gh/dooboolab/whatssub/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/whatssub)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

![whatssub](https://user-images.githubusercontent.com/27461460/59979206-7e61c500-961f-11e9-89d8-a6c9c98c374d.gif)

## Contributing to `whatssub`
* See also
  - dooboolab's [vision-and-mission](https://github.com/dooboolab/dooboolab.com/blob/master/vision-and-mission.md)
  - dooboolab's [code of conduct](https://github.com/dooboolab/dooboolab.com/blob/master/code-of-conduct.md)
* [Contributing](CONTRIBUTING.md)

> Specification
* [react-native](https://github.com/facebook/react-native)
* [react-navigation](https://github.com/react-navigation/react-navigation)
* [typescript](https://github.com/Microsoft/TypeScript)
* [localization](https://github.com/stefalda/ReactNativeLocalization)
* [styled-components](https://github.com/styled-components/styled-components)
* [ts-jest](https://github.com/kulshekhar/ts-jest)
* [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
* [react-hook](https://reactjs.org/docs/hooks-intro.html)
* [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks)

> Native modules
* [react-native-animatable](https://github.com/oblador/react-native-animatable)
* [react-native-onesignal](https://github.com/geektimecoil/react-native-onesignal)
* [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

### Gain points
```
1. Sample of context-api with `react-hook` (`useContext`).
2. Know how to structure react native app with typescript.
3. Know how to navigate between screens with `react-navigation`.
4. Know how to write test code with `react-native-testing-library`.
5. Know how to `lint` your project with `tslint`.
6. Know how to localize your project.
```

### INSTALL
```
npm install && npm start
// or
yarn && yarn start
```

### Structures
```text
app/
├─ .dooboo // necessary if using dooboo-cli
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│     └─ navigations
│     └─ screen
│     └─ shared
│  └─ contexts
│  └─ hooks
│  └─ utils
│  └─ App.tsx
├─ test/
├─ .buckconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ babel.config.js
├─ index.js
├─ jest.config.js
├─ package.json
├─ README.md
├─ STRINGS.js
├─ tsconfig.json
└─ tslint.json
```

### `config.ts`
Run below to make your own `config` variables.
| `cp config.sample.ts config.ts`

* `config` variables

| Name              | Description                                        | required? | default               |
|:----------------- |:-------------------------------------------------- | --------- | --------------------- |
| firebaseConfig    | firebaseConfig keys in `firebase` web app project. | true      | {our test server variable} |

```
// Please edit below variables to your `firebase` project.
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
````

### Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

## Testing the project
Testing is also just a command away:
```sh
npm test
```
> Result
```
> jest -u

 PASS  src/components/shared/__tests__/Button.test.tsx
 PASS  src/components/screen/__tests__/Intro.test.tsx
 › 2 snapshots written.

Snapshot Summary
 › 2 snapshots written in 1 test suite.

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   2 added, 4 passed, 6 total
Time:        3.055s, estimated 6s
Ran all test suites
```

### Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

### Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
We used [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) pacakage for this one.
```
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const en = {
  HELLO: 'Hello',
  LOGIN: 'Login',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  SIGNUP: 'SIGN UP',
  FORGOT_PW: 'Forgot password?',
  NAVIGATE: 'Navigate',
  CHANGE_THEME: 'Change theme',
};

const ko = {
  HELLO: '안녕하세요',
  LOGIN: '로그인',
  EMAIL: '이메일',
  PASSWORD: '패스워드',
  SIGNUP: '회원가입',
  FORGOT_PW: '비밀번호를 잊어버리셨나요?',
  NAVIGATE: '이동하기',
  CHANGE_THEME: '테마변경',
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
```

### Expo version
33

### React navigation
3

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://dooboolab.com"><img src="https://avatars0.githubusercontent.com/u/27461460?v=4" width="60px;" alt="Hyo Chan Jang"/><br /><sub><b>Hyo Chan Jang</b></sub></a><br /><a href="https://github.com/dooboolab/whatssub/commits?author=hyochan" title="Code">💻</a> <a href="https://github.com/dooboolab/whatssub/commits?author=hyochan" title="Tests">⚠️</a> <a href="https://github.com/dooboolab/whatssub/commits?author=hyochan" title="Documentation">📖</a></td><td align="center"><a href="https://www.linkedin.com/in/youngsu-han/"><img src="https://avatars1.githubusercontent.com/u/22214150?v=4" width="60px;" alt="Youngsu Han"/><br /><sub><b>Youngsu Han</b></sub></a><br /><a href="https://github.com/dooboolab/whatssub/commits?author=heyman333" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
