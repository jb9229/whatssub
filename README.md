# whatssub
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-native-ts.svg?style=shield)](https://circleci.com/gh/dooboolab/whatssub)
[![codecov](https://codecov.io/gh/dooboolab/whatssub/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/whatssub)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
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
├─ .doobooo // necessary if using dooboo-cli
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
├─ .flowconfig
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
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    LOGIN: 'Login',
  },
  kr: {
    LOGIN: '로그인',
  },
});

export {
  strings,
};
```

Fixed jest setup by adding following in jestSetup.

```
import { NativeModules } from 'react-native';

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.ReactLocalization = {
  language: 'en_US',
};
```

### React version
16.8

### React Native version
0.60

### React navigation
3

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://dooboolab.com"><img src="https://avatars0.githubusercontent.com/u/27461460?v=4" width="60px;" alt="Hyo Chan Jang"/><br /><sub><b>Hyo Chan Jang</b></sub></a><br /><a href="https://github.com/dooboolab/whatssub/commits?author=hyochan" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
