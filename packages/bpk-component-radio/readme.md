# bpk-component-radio

> Backpack radio button component.

## Installation

```sh
npm install bpk-component-radio --save
```

## Usage

```js
import React from 'react'
import BpkRadio from 'bpk-component-radio'

export default MyComponent = () => (
  <BpkRadio
    name='return'
    label='Return'
    onChange={() => console.log('radio changed')}
    checked
  />
)
```

### Props

| Property  | PropType | Required | Default Value |
| --------- | -------- | -------- | ------------- |
| name      | string   | true     | -             |
| onChange  | func     | true     | -             |
| id        | string   | false    | null          |
| label     | string   | false    | null          |
| value     | string   | false    | null          |
| checked   | bool     | false    | false         |
| disabled  | bool     | false    | false         |