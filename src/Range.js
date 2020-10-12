import React, { useState } from 'react'

import { Grommet, Box, RangeSelector, Stack, Text } from 'grommet'
import { grommet } from 'grommet/themes'

import { FibonacciLine } from './FibonacciLine'

const min = 0
const max = 25
// build an array with min/max

const valuesArray = []
for (let i = min; max >= i; ++i) {
  valuesArray.push(i)
}

export const Range = () => {
  const initialSubset = valuesArray.slice(0, 5)
  console.log({ initialSubset })

  const [range, setRange] = useState(initialSubset)
  const onChange = values => {
    console.log(values)
    setRange(values)
  }

  return (
    <Grommet theme={grommet}>
      <Box align='center' pad='large'>
        <Stack>
          <Box direction='vertical' justify='between'>
            {valuesArray.map(value => (
              <Box
                key={value}
                width='xxsmall'
                height='xxsmall'
                align='center'
                pad='small'
                border={false}
              >
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction={'horizontal'}
            min={min}
            max={max}
            size='full'
            values={range}
            onChange={onChange}
          />
        </Stack>
      </Box>
      <Box>
        <FibonacciLine limit={range[ range.length - 1]}/>
      </Box>
    </Grommet>
  )
}
