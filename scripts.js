const inputField = document.getElementById('input')
const searchButton = document.getElementById('search')
searchButton.addEventListener('click', e=> {
	console.log('You clicked search')
	console.log(inputField.value)
})