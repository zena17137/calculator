const input = document.getElementById('inp');
const btn = document.getElementById('btn')


function result_of_input() {
	let input_value = input.value
	
	let result = eval(input_value)

	input.value = result
}

btn.addEventListener('click', result_of_input);