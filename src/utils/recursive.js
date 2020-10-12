// print out 'n' iterations
// e.g. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…
// export for use in components

function recursive(iterations) {
  if (iterations === 1) {
    return [0, 1]
  } else {
    let numbers = recursive(iterations - 1)

    numbers.push(
      numbers[
        numbers.length - 1
      ] + numbers[
        numbers.length - 2
      ]
    )

    return numbers
  }
}

export default function(limit) {
  return recursive(limit)
}
