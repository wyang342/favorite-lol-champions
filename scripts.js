// Selecting DOM Elements
const inputSummoner = document.getElementById('inputSummoner');
const inputAPI = document.getElementById('inputAPIKey');
const searchButton = document.getElementById('search');

// Initializing variables
var summonerName, summonerId;
var apiKey = '';
var summonerData = {
	'champions': {},
	'queueType': {},
	'roleType': {}
}

// Declaring API Endpoints
const baseURL = 'https://na1.api.riotgames.com';
const CORSAnywhere = 'https://cors-anywhere.herokuapp.com/';

// Defining functions
function ListenForSearch() {
	searchButton.addEventListener('click', e => {
		summonerName = inputSummoner.value;
		// apiKey = inputAPI.value;
		const getSummonerByName = CORSAnywhere + baseURL + "/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + apiKey;
		axios.get(getSummonerByName)
			.then(d => {
				summonerId = d['data']['accountId'];
				loopThruMatches();
			});
	});
};

function loopThruMatches() {
	let i = 0;
	while (true) {
		let beginIndex = "?beginIndex=" + i.toString();
		let getMatchList = CORSAnywhere + baseURL + "/lol/match/v4/matchlists/by-account/" + summonerId + beginIndex + "&api_key=" + apiKey
		let matches;
		axios.get(getMatchList)
			.then(d => {
				matches = d['data']['matches']
			});
			console.log(matches)
				if (matches.length === 0) {
					break;
				}
				matches.forEach(match => {
					let champion = match['champion'].toString();
					if (!(champion in summonerData['champions'])) {
						summonerData['champions'][champion] = 1;
					} else {
						summonerData['champions'][champion] += 1;
					}
				});
		i += 100;
	};
	console.log(summonerData);
};

// Initializing Functions
ListenForSearch();
