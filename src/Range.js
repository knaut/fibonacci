import React, { useState } from 'react'

import { Grommet, Box, RangeSelector, Stack, Text } from 'grommet'
import { grommet } from 'grommet/themes'

export const Range = () => {
  return (
    <Grommet theme={grommet}>
      <Box align='center' pad='large'>
        <Stack>
          <Box direction='vertical' justify='between'>
            {[0, 5, 10, 25, 100].map(value => (
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
            min={0}
            max={20}
            size='full'
            values={[0, 5]}

          />
        </Stack>
      </Box>
    </Grommet>
  )
}
