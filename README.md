# A-FRAME-TS-BOILERPLATE
An [A-Frame](https://aframe.io) 1.3.0 boilerplate with [Typescript](https://www.typescriptlang.org), 
[ESLint](https://typescript-eslint.io/), and [Webpack](https://webpack.js.org).

![Hello World](./docs/assets/images/preview.png)

## Setup
To get started, you can [fork this repository](https://github.com/PlinioDeVos/A-FRAME-TS-BOILERPLATE/fork) or use the
['Use this template'](https://github.com/PlinioDeVos/A-FRAME-TS-BOILERPLATE/generate) button up top.<br><br>
After you have forked this repository, you can clone your fork locally and get it ready by following this example:

    git clone https://github.com/PlinioDeVos/A-FRAME-TS-BOILERPLATE.git
    cd A-FRAME-TS-BOILERPLATE
    npm install

## Commands
### Development server
To start the Webpack development server, enter the following command in the terminal:

    npm run start
If you'd like to change the server settings then you must modify `devServer` in [`webpack.config.js`](webpack.config.js).
### Bundling
To create the bundle file, you can enter the following command in the terminal:

    npm run bundle
By default everything in [`main.ts`](docs/main.ts) will be bundled and placed in [`docs > scripts`](docs/scripts)
as [`bundle.js`](docs/scripts/bundle.js).<br>
Every [A-Frame component](https://aframe.io/docs/1.3.0/core/component.html) should be placed in the
[`components`](docs/components) folder, these will be bundled as well.<br><br>
If you'd like to change bundle behaviour then you must modify the [`webpack.config.js`](webpack.config.js) file.
### Linter
To run Typescript ESLint, enter the following command in the terminal:

    npm run lint
#### Rules
You can find all the rules [here](https://typescript-eslint.io/rules/) and add/remove them in the
[`.eslintrc.cjs`](.eslintrc.cjs) file.
#### Ignoring files
To make ESLint ignore files you must add them in the [`.eslintignore`](.eslintignore) file.
#### 
## Hosting
This boilerplate is made in such a way that it can easily be hosted by making use of
[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

## License
This boilerplate is free software and is distributed under an [MIT License](LICENSE).