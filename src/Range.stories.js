import React from 'react'
import { Range } from './Range.js'

export default {
  title: 'Range',
  component: Range,
  argTypes: {}
}

export const RangeStory = () => <Range/>

RangeStory.args = {
  label: 'Range'
}