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
`className?: string` | additional class that's added to the main SlidingContainer wrapper. Default `null`.
`height?: string` | Height of slides and container. Default `250px`.
`width?: string` | Width of slides and container. Default `100%`.
`leftArrow?: React.ReactElement<any>` | Left arrow component. Default `<Arrow symbol='◄' />`.
`rightArrow?: React.ReactElement<any>` | Right arrow component. Default `<Arrow symbol='►' />`.
`slideXMarginPx?: number` | Margin for one slide. That space from navigation arrows or side borders. Default `20`.
`showArrows?: boolean` | Whether to show arrows or not. Default `true`.
`slideTime?: number` | Speed of slide travel to the right or left. Default `500`.
`slidingType?: keyof IEasings` | Type of slide easing. Default `easeInQuad`. Available constants: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`

### Slide

Option | Description
--- | ---
`className?: string` | Additional class that's added to the main Slide wrapper. Default `null`.
`backgroundImage?: string` | Image for a whole slide background. Default `null`.
`style?: {[key: string]: string or number}` | Style attributes object for a slide. It is mostly used by slider system and you shouldn't touch this. Default `{}`.

## Simple usage

````javascript
import * as React from "react";

// This is the main component that you need.
import SlidingContainer from "react-sliding-container";
// Component comes without CSS styles, so if you want to have default ones you must include this
import "react-sliding-container/lib/main.css";

import "assets/scss/App.scss";
import Slide from "react-sliding-container/lib/components/Slide";

export default class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <div className="container app-component">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <h1 className="display-5 mb-5">React Sliding Container Demo App</h1>
                        <SlidingContainer
                            options={{
                                className: "my-slider",
                                height: "500px",
                                slideXMarginPx: 10,
                                showArrows: true
                            }}
                        >
                            <Slide
                                backgroundImage="url('https://www.publicdomainpictures.net/pictures/130000/velka/abstract-wallpaper-1442844111BON.jpg')"
                            >
                                <div>
                                    <h2>Hello world!</h2>
                                </div>
                            </Slide>
                            <Slide
                                backgroundImage="url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png')"
                            >
                                <div>
                                    <h2>This works!</h2>
                                </div>
                            </Slide>
                            <Slide
                                backgroundImage="url('https://images2.alphacoders.com/720/thumb-1920-72092.jpg')"
                            >
                                <div>
                                <iframe style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", height: "100%"}}
                                    width="560" height="315" src="https://www.youtube.com/embed/JhKBSLRU5XA?start=10"
                                    frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </Slide>
                            <Slide
                                backgroundImage="url('http://server1.intermedia.ge/pictures/original/190/190695.jpg?/ekranis-foni.jpg')"
                            >
                                <div className="container-fluid mt-5">
                                    <div className="row pt-5">
                                        <div className="col-4 py-5" style={{ background: "rgba(255, 255, 255, 0.2)" }}>1st col</div>
                                        <div className="col-4 py-5" style={{ background: "rgba(255, 255, 255, 0.3)" }}>2nd col</div>
                                        <div className="col-4 py-5" style={{ background: "rgba(255, 255, 255, 0.4)" }}>3rd col</div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide
                                backgroundImage="url('https://5dwallpaper.com/wp-content/uploads/2016/06/space-wallpaper-hd6.jpg')"
                            >
                                <div>
                                    <h2>Nice picture.</h2>
                                </div>
                            </Slide>
                            <Slide
                                backgroundImage="url('http://aslania.com/wp-content/uploads/2018/03/abstract-wallpapers-11.jpg')"
                            >
                                <div>
                                    <h2>Why not this one too.</h2>
                                </div>
                            </Slide>
                        </SlidingContainer>
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

- Run lint fix, tests and build before git commit, push and npm publish
- Typescript, React, SCSS
- TS, SASS Linting
- Tests, Jest, Mocha, Enzyme
- Configurations for systems:
  - Travis
  - Appveyor
  - CircleCI
- Coveralls integrations for displaying how much of code is tested (You have to add your own token to .coveralls.yml or if using a CI add environment variable COVERALLS_REPO_TOKEN for submitting results)

## TODO

- Improve swiping on mobile
- Add various callbacks
- Add auto animation feature
- Add navigation my keyboard left/right keys
- Add callback onSlideLoaded

## Cuntributors are welcome

Contact me if you want to help :)

## React TypeScript NPM package Boilerplate Starter project

I've branched a part where everything is ready for creating a new NPM package.
https://github.com/vygandas/react-sliding-container/tree/npm-package-component-skeleton-boilerplate

