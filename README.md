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

## License

MIT © [scottjustin5000](https://github.com/scottjustin5000)
