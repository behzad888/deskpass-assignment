# Strip quote
Strip quote characters from a string exepts quotes that are part of the words.

Quotation marks includes:
```js
 ' \u0022
 " \u0027
 ‘ \u2018    ’  \u2019
 “ \u201C    ”  \u201D
 ‹ \u2039    ›   \u203A
 « \u00AB    »   \u203A
```

Quotes that are part of the words includes:
 - Apostrophes `(event after the "s" (s'))`
 - Contractions


## Project setup
```
yarn install
```
## Launches the test runner
```
yarn start
```
## Project build
```
yarn build
```
## Format code
```
yarn prettier
```