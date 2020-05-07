// print out 'n' iterations
// e.g. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…


function recursive(first, last, limit) {
	const addLast = first + last

	console.log({first, addLast})

	if (addLast <= limit) {
		return recursive(last, addLast, limit)
	}
}

console.log(recursive(0, 1, 10))