# profile-card

> component for player profiles

[![NPM](https://img.shields.io/npm/v/profile-card.svg)](https://www.npmjs.com/package/profile-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save profile-card
```

### props

* size     - small or large (required)
* player   - player object (see structure below)
* tabData  - data to be displayed on the back of card (see structure below)

## Usage

[EXAMPLE](http://sj5000-profile-card.s3-website-us-east-1.amazonaws.com/)

```jsx
import React, { Component } from 'react'

import ProfileCard from 'profile-card'


class Example extends Component {

  const tabData = [{
    label: 'Stats',
    data: {
      columns: ['foo', 'bar'],
      rows: [{
        foo: 123,
        bar: 456
      }]
    }
  }, {
    label: 'Splits',
    data: {
      columns: ['foo', 'bar'],
      rows: [{
        foo: 123,
        bar: 456
      }]
    }
  }]

  const player ={
      firstName: 'Fernando',
      lastName: 'Tatis Jr.',
      position: 'Short Stop',
      positionAbbrev: 'SS',
      number: '23',
      headShot:'https://headshots/23.png',
      teamLogo: 'https://headshot/sd.png',
      summary: 'info',
      details:  [{
        key: 'height',
        value: `6'3`,
      }, {
        key: 'weight',
        value: 217
      }]
  }

  render() {
    return <ProfileCard size='large' player={player} tabData={tabData} />
  }
}
```

Front
<img width="510" alt="Screen Shot 2021-06-18 at 12 46 43 PM" src="https://user-images.githubusercontent.com/2997998/122610564-b6e0e180-d034-11eb-8f65-cca2fd6a71d7.png">

Back
<img width="477" alt="Screen Shot 2021-06-18 at 12 48 24 PM" src="https://user-images.githubusercontent.com/2997998/122610588-bf391c80-d034-11eb-8480-dcb64f662188.png">

## License

MIT © [scottjustin5000](https://github.com/scottjustin5000)
