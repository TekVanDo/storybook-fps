# Storybook FPS-meter Addon

Enable it to display current fps to detect some frame loss

![](./assets/chrome-capture-2022-1-16.gif)

🚧 This addon is experimental and a work in progress. We are not on stable versions yet 🚧

# Angular Router Storybook Addon
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg?sanitize=true)](https://storybook.js.org)
[![npm](https://img.shields.io/npm/v/storybook-fps-meter)](https://www.npmjs.com/package/storybook-fps-meter)
[![Release](https://github.com/TekVanDo/storybook-fps/actions/workflows/release.yml/badge.svg)](https://github.com/TekVanDo/storybook-fps/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/dm/storybook-fps-meter)](https://www.npmjs.com/package/storybook-fps-meter)

> A simple plugin to make working with the angular router
in storybook easier
### How to use it
Install the addon via npm:
```shell
npm i storybook-fps-meter
```
Add it to your storybook configuration:
```js
// .storybook/main.js
module.exports = {
    addons: ["storybook-fps-meter"],
};
```
