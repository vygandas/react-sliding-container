# React Slider with your custom components in each slide (react-sliding-container)

[![CircleCI](https://circleci.com/gh/vygandas/react-sliding-container/tree/master.svg?style=svg)](https://circleci.com/gh/vygandas/react-sliding-container/tree/master)
[![Build Status](https://travis-ci.org/vygandas/react-sliding-container.svg?branch=master)](https://travis-ci.org/vygandas/react-sliding-container)
[![Build status](https://ci.appveyor.com/api/projects/status/rrbb14a14sf2mrel/branch/master?svg=true)](https://ci.appveyor.com/project/vygandas/react-sliding-container/branch/master)
[![Dependency Status](https://david-dm.org/vygandas/react-sliding-container.svg?theme=shields.io)](https://david-dm.org/vygandas/react-sliding-container)
[![devDependency Status](https://david-dm.org/vygandas/react-sliding-container/dev-status.svg?theme=shields.io)](https://david-dm.org/vygandas/react-sliding-container#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/github/vygandas/react-sliding-container/badge.svg?branch=master)](https://coveralls.io/github/vygandas/react-sliding-container?branch=master)
[![Inline docs](http://inch-ci.org/github/vygandas/react-sliding-container.svg?branch=master)](http://inch-ci.org/github/vygandas/react-sliding-container)
[![npm](https://img.shields.io/npm/v/react-sliding-container.svg?maxAge=3600)](https://www.npmjs.com/package/react-sliding-container)
[![downloads](https://img.shields.io/npm/dt/react-sliding-container.svg?maxAge=3600)](https://www.npmjs.com/package/react-sliding-container)
[![Twitter](https://img.shields.io/twitter/url/https/www.npmjs.com/package/react-sliding-container.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-sliding-container)

DEMO live: https://agitated-banach-4668c2.netlify.com

DEMO repo: https://github.com/vygandas/react-sliding-container-demo

NPM pack: https://www.npmjs.com/package/react-sliding-container

## Installation

`npm i --save react-sliding-container`

### How to include

Main component `import SlidingContainer from "react-sliding-container";`

Default styles `import "../node_modules/react-sliding-container/lib/SlidingContainer.css";`

## Components

Component | Description
--- | ---
SlidingContainer | Main slider wrapper. It holds slide elements.
Slide | Slide element that contains content. Slide content types (wrapped inside) `React.ReactElement<any> | HTMLElement`

## Options

### SlidingContainer

Option | Description
--- | ---
className | `string` additional class that's added to the main SlidingContainer wrapper
stopPropagation | `boolean = true` prefents drag/touch events from bubbling up 

### Slide

Option | Description
--- | ---
className | `string` additional class that's added to the main Slide wrapper


## Simple usage

````javascript
import * as React from "react";

// This is the main component that you need.
import SlidingContainer from "react-sliding-container";
// Component comes without CSS styles, so if you want to have default ones you must include this
import "../node_modules/react-sliding-container/lib/main.css";

import "assets/scss/App.scss";

export default class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <div className="container app-component">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <h1 className="display-5 mb-5">React Sliding Container Demo App</h1>
                        <SlidingContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
````

## Custom left / right Arrows

To use your own arrows you must extend Arrow class and override methods according to your needs.
This is needed because it holds callback functions attached from main component.

````javascript
import Arrow from "react-sliding-container";
//<...>
const MyCustomArrow = class MyArrow extends Arrow {
    render() {
        return (
            <div>Left</div>
        );
    }
}
//<...>
<SlidingContainer
    options={{
        leftArrow: <MyCustomArrow />
    }}
/>
````

## About this component core

It can be used as a base component for other ideas. There're implemented:

- Typescript, React, SCSS
- TS, SASS Linting
- Tests, Jest, Mocha, Enzyme
- Configurations for systems:
  - Travis
  - Appveyor
  - CircleCI
- Coveralls integrations for displaying how much of code is tested (You have to add your own token to .coveralls.yml or if using a CI add environment variable COVERALLS_REPO_TOKEN for submitting results)

## React TypeScript NPM package Boilerplate Starter project

I've branched a part where everything is ready for creating a new NPM package.
https://github.com/vygandas/react-sliding-container/tree/npm-package-component-skeleton-boilerplate

