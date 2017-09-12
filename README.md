#  HTML Reader Example
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

GIF-OLDVIEW : https://media.giphy.com/media/xT9IgulsRi84u8wX5u/giphy.gif

GIF-REMAKEVIEW : http://www.giphy.com/gifs/3o7aCV3RDXWqQn50vS

NOTE :
- Add WPM (Words Per Minute)
- Make the HTML Tag View more beautiful ( Custom Fonts, Custom Size )
- App Config is on ../Config/AppConfig
- Using I18n language but for now just put english localization
- Already Component based app so always try to Create new Component to be reusable in the future
- Tested and worked perfectly on iOS
- the style of HTML tag can be easily customized, example in this one i set the bold tag font weight value is 900, change the value go to Metrics configuration and change bold value
- Already using Redux and Sagas
- Any Question or missing something please contact michael.abadi@ti.ukdw.ac.id
- if run from react-native run iOS is fail please using Xcode directly sometimes that default react native command is not working...

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.


