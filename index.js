// print out 'n' iterations
// e.g. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…

const ITERATION_LIMIT = 100

function recursive(last, next, limit) {
	
	const iteration = last + next

	if (iteration <= limit) {

		console.log(iteration)

		return recursive(next, iteration, limit)
	}
}

console.log(recursive(0, 1, ITERATION_LIMIT))