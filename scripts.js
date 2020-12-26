// Selecting DOM Elements
const inputSummoner = document.getElementById('inputSummoner');
const inputAPI = document.getElementById('inputAPIKey');
const searchButton = document.getElementById('search');

// Initializing variables
var summonerName, apiKey;

// Defining API Endpoints
const baseURL = 'https://na1.api.riotgames.com';
const getSummonerByName = baseURL + "/lol/summoner/v4/summoners/by-name/" + summonerName + 

// Defining functions
function searchListener() { // should probably change function name to listenforsearch
	searchButton.addEventListener('click', e => {
		summonerName = inputSummoner.value;
		apiKey = inputAPI.value;
	});
}


// Initializing functions
searchListener();

