## Contribution Guide
> You should be aware of below stacks(do not need to be professional) to contribute to our repository.
1. [React Native](https://facebook.github.io/react-native)
2. [Firebase](https://firebase.google.com/?gclid=CjwKCAjwxrzoBRBBEiwAbtX1n3WG8ZeKbtDbk0VRNiQLJCPxK_AVYQpAN9nlrnWFDmmO755f4AI6lhoCLWwQAvD_BwE)
Specifically, we are using `firebase` as our backend. Also we are starting our development from `react-native` version `0.60-rc.2` which specifically migrated to `androidx` for `android` and `cocoapod` project for `ios`. Therefore, to install our project, you should at least search what they are if you aren't totally unaware of it. Then follow [Installation](#installation).
3. [expo](https://expo.io)
~~4. [cocoapod](https://cocoapods.org)~~
~~5. [AndroidX](https://developer.android.com/jetpack/androidx)~~

### Installation
1. Fork our project to yours.
   * Recommended to have `forked` master branch to be updated to upstream.
   * Configure [Syncing a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/).
     - `git remote add upstream https://github.com/dooboolab/whatssub`
     - Check it with `git remote -v`
   * Fetch the branches from upstream repository by `git fetch upstream`
   * When you want to give `PR`, make new branch `git checkout -b [feature_name]`
     - Before pushing `PR`, do `git fetch upstream` from master branch then try the rebase by `git rebase master`
     - Check your status by `git log --decorate --oneline --all --graph` or `npm run git:log`
2. Git clone your forked repository.
   ```
   git clone https://github.com/<your-id>/whatssub.git
   ```
3. Install your packages
   ```
   yarn
   ```
   * Note that we recommend using yarn because all of our team members do.
   * Also node that `yarn.lock` and `package-lock.json` sometimes make collision. Try to delete one of them.
4. Configure `ios` project
   * Go to `ios` directory and run `pod install`
   * Since `react-native` is using version `0.60` for now, the project is built with `pod` project which is required to install packages to build your `ios` project.
5. Configure `android` project
   * Not much required. Be aware your project should be compatible with `androidx`.
     - Above means you should becareful when using third party `react-native native modules` becuase they might not be compatible with `androidx` which will result in failed build.
6. Configure `firebase` project
   * Try to create your own `firebase` project.
   * Copy `config.sample.ts` to `config.ts`.
     ```
     cp config.sample.ts config.ts
     ```
   * Setup variables of your own `firebase` project.
     ```
     export const firebaseConfig = {
       apiKey: '',
       authDomain: '',
       databaseURL: '',
       projectId: '',
       storageBucket: '',
       messagingSenderId: '',
       appId: '',
     };
     ```
     > Note that initial keys are set to `dev` server. However, this will be limited when more testers use the same server since firebase has its limit in accessing with free tier. Therefore, we recommend you to test this on your own `firebase` project.
7. Run your project
   * `ios`
     - yarn run `ios`
   * `android`
     - yarn run `android`
       > Note that you should open your emulator beforehand before running above command since the script won't automatically open emulator unlike `ios`.


### Issue
* Please search and register if you already have the issue you want to create. If you have a similar issue, you can add additional comments.
* Please write a problem or suggestion in the issue. Never include more than one item in an issue.
* Please be as detailed and concise as possible.
	* If necessary, please take a screenshot and upload an image.

### Pull request(PR)
* PR is available to `master` branch.

### Coding Guidelines
Please follow the Coding conventions as much as possible when contributing your code.
* The indent tab is two spaces.
* The class declaration and the `{}` in curly brackets such as function, if, foreach, for, and while should be in the following format. Also if you installed eslint in vscode or in your code editor, it will help you with linting.
	* `{` should be placed in same line and `}` should be placed in next line.
```
for (let i = 0; i < 10; i++) {
  ...
}
array.forEach((e) => {
  ...
});
```
  * Space before `(` and after `)`.
* **If you find code that does not fit in the coding convention, do not ever try to fix code that is not related to your purpose.**
