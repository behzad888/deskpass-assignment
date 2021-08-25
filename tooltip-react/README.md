# React tooltip
In this project, I'm using [Popper](https://popper.js.org/) for *positioning engine*.

I'm trying to create a reusable `tooltip` component with some options like:
 - **place**: `top` | `bottom` | `left` | `right` | `top-start` | `top-end` | `bottom-start` | `bottom-end` | `right-start` | `right-end` | `left-start` | `left-end` | `auto` | `auto-start` | `auto-end`
  - **title**: This option shows string or React/HTML element in the tooltip
  - **flip**: This option can change the placement of tooltip when it's scheduled to overflow a given  `clippingParents` boundary.
  - **preventOverflow**: This option prevents the tootlip from being cut off by moving it so that it stays visible within `clippingParents` boundary area.
  - **offset**: This option lets you displace a tooltip element from its reference element.
  - **showArrow**: This option positions an inner element of the tooltip which is a triangle or caret that points toward the reference element.

> *clippingParents* are the scrolling containers that may cause the element to be partially or fully cut off.

## BEM
I'm following *BEM* methodology for css naming convension.
```SCSS
.block__element--modifier {}
```
**BEM w/ Namespaces:**

The naming conventions start with `.d` which stands for `Deskpass`.
```SCSS
.namespace-block__element--modifier {}
.d__element--modifier {}
```

**Component:**

`c` stands for component
```SCSS
.dc-component-name[<element>|<modifier>] {}
```

**Element:**

`e` stands for element
```SCSS
.de-element-name[<element>|<modifier>] {}
```

## ITCSS
I'm following *ITCSS* to organize project SCSS files. the SCSS file names as follows:

 - **Components**: Specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components
 - **Elements**: Styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
 
## Project setup
```
yarn install
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Format code
```
yarn prettier
```