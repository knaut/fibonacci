import React from 'react'
import { Text } from 'grommet'
import recursive from './utils/recursive'

export const FibonacciLine = ({ limit }) => {
  const numbers = recursive(limit)

  return (
    <>
      {numbers.map(number => (
        <Text>{number}</Text>
      ))}
    </>
  )
}